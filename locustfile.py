import random

from locust import HttpUser, task

ids = [
    "66741443a467a274eadf979b",
    "66741442a467a274eaca01f3",
    "66741444a467a274eaf273b6",
    "66741444a467a274eaf78712",
    "66741441a467a274ea9d3c54",
    "66741440a467a274ea8cf0bc",
    "66741440a467a274ea7a8fba",
    "66741440a467a274ea6f49cd",
    "6674143fa467a274ea636d6e",
    "6674143fa467a274ea5fb004"
]

class HelloWorldUser(HttpUser):
    @task
    def hello_world(self):
        random_id = random.choice(ids)
        self.client.get(f"/users/{random_id}")


