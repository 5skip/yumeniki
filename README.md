## 環境構築

### バックエンド

backend/で以下を実行

`pip -m venv myenv`

`myenv/scripts/activate`

`pip install -r requirements.txt`

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver`