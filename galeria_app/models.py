from django.db import models
from uuslug import uuslug
from django.urls import reverse


class Autor(models.Model):

    author = models.CharField('Nombre', max_length=444)
    description = models.CharField(max_length=444)
    url_web = models.URLField(max_length=200, null=True)
    slug = models.SlugField(primary_key=True, unique=True, blank=True)

    def __str__(self):
        return self.author

    def save(self, *args, **kwargs):
        self.slug = uuslug(self.author, instance=self)
        super(Autor, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('authors_detail', args=[str(self.slug)])


class Pictures(models.Model):
    autor = models.ForeignKey(
            Autor,
            on_delete=models.CASCADE,
            related_name="pictures",
    )
    title = models.CharField(max_length=546)
    url_pic = models.URLField(max_length=200, null=True)
    year = models.CharField(max_length=4, blank=True)

    def __strt__(self):
        return self.title
