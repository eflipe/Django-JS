from django.db import models
from uuslug import uuslug
from django.urls import reverse


class pictures(models.Model):
    title = models.CharField(max_length=546)
    author = models.CharField('Nombre', max_length=444)
    slug = models.SlugField(primary_key=True, unique=True, blank=True)
    url_pic = models.URLField(max_length=200, null=True)
    year = models.CharField(max_length=4)

    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        self.slug = uuslug(self.author, instance=self)
        super(pictures, self).save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('authors_detail', args=[str(self.slug)])
