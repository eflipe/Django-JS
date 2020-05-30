from django.test import Client, TestCase
from django.urls import reverse

from .models import Autor, Pictures


class GaleriaTests(TestCase):

    def setUp(self):

        self.autor = Autor.objects.create(
                    author="Autor de prueba",
                    description="Blah blah blah blah",
                    url_web="www.pepe.com",

        )
        self.pic = Pictures.objects.create(
                    title="Título de prueba",
                    autor=self.autor,
                    url_pic="www.test.com/test.jpg",
                    year="2020",

        )

    def test_pic_listing(self):
        self.assertEqual(f'{self.pic.title}', "Título de prueba")
        self.assertEqual(f'{self.pic.url_pic}', "www.test.com/test.jpg")
        self.assertEqual(f'{self.pic.year}', "2020")

    def test_pic_listview(self):
        response = self.client.get(reverse('pics_list'))
        self.assertEqual(response.status_code, 200)
        self.assertContains(response, 'Título de prueba')
        self.assertTemplateUsed(response, 'galeria_app/pics_list.html')

    def test_pic_detailview(self):
        response = self.client.get(self.autor.get_absolute_url())
        no_response = self.client.get('/artistas/12345')
        self.assertEqual(response.status_code, 200)
        self.assertEqual(no_response.status_code, 404)
        self.assertContains(response, 'Autor de prueba')
        self.assertTemplateUsed(response, 'galeria_app/authors_detail.html')
