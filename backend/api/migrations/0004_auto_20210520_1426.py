# Generated by Django 3.1.4 on 2021-05-20 13:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210520_1419'),
    ]

    operations = [
        migrations.AlterField(
            model_name='room',
            name='name_of_room',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='room',
            name='streaming_service',
            field=models.CharField(default='', max_length=10),
        ),
    ]
