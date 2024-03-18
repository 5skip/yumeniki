## 要件定義

### 画面遷移図
![夢ニキ画面遷移図](https://github.com/5skip/yumeniki/assets/107281831/6f7b6c35-cb8b-414d-8cce-dda7179c32ef)

### ER図
![夢ニキER図](https://github.com/5skip/yumeniki/assets/107281831/d3f1cd11-9784-435d-bf5b-e084ba51c3aa)

### 技術構成
![夢ニキ技術構成](https://github.com/5skip/yumeniki/assets/107281831/c41a317e-f396-4dde-9e18-b7254ca73576)

## 環境構築

### バックエンド

backend/で以下を実行

`pip -m venv myenv`

`myenv/scripts/activate`

`pip install -r requirements.txt`

`python manage.py makemigrations`

`python manage.py migrate`

`python manage.py runserver`
