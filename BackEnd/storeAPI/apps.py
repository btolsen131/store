from django.apps import AppConfig


class StoreapiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'storeAPI'



    def ready(self):
        import storeAPI.signals
