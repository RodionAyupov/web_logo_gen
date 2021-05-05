from django import forms
from .models import *

class BroadcastForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(BroadcastForm, self).__init__(*args, **kwargs)
        self.fields['broadcast'].label = ''
    class Meta:
        model = Broadcast
        widgets = {
            'broadcast': forms.TextInput(attrs={'class': 'form-control form-control-lg'}),
        }
        exclude = [""]