# Personal Site
A Django-powered portfolio/blogging platform I built for personal use. AngularJS & Angular Material frontend.
Allows the following functionality:
* Curating of a portfolio of work, attaching images/github links etc
* Blogging with a rich text editor

# Install
npm install
gulp
virtualenv venv
source venv/bin/activate

## For simple hosting
pip install -r requirements.txt
## For gunicorn & postgres
pip install -r requirements_hosted.txt

./manage.py migrate
./manage.py createsuperuser
