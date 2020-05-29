from django.contrib import admin

from .models import pictures


class PicAdmin(admin.ModelAdmin):
    list_display = ("title", "author",)


admin.site.register(pictures, PicAdmin)
