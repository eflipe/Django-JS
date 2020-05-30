from django.contrib import admin

from .models import Autor, Pictures


class PicturesInline(admin.TabularInline):
    model = Pictures


class PicAdmin(admin.ModelAdmin):
    inlines = [
        PicturesInline,
    ]
    list_display = ("author", "url_web", )


admin.site.register(Autor, PicAdmin)
