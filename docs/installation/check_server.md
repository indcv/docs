---
sidebar_position: 2
---

# Check server

## Create dotenv file

Create `.env` file in project root folder:

```ini
DOCS_ENABLE = True
FACE_MODEL_NAME = "VGG-Face"
FACE_MODEL_PATH = "onnx_models/vgg_face.onnx"
FACE_DETECTOR_NAME = "OpenCV"
FACE_IMAGES_PATH = "face_img"
```

## Create dataset folder

Add your image dataset in `FACE_IMAGES_PATH` folder.

Structure:

```
face_img:
│
├───1_User1
│       user_1_img1.jpg
│
├───2_User2
│       user_2_img1.jpg
│
├───3_User3
│       user_3_img1.jpg
│
└───2_User4
        user_4_img1.jpg
```

The number at the beginning of the folder name is the level of access to the equipment.

## Test server

Now you can run server:

```sh
fastapi run app.py
```

:::info

You can run without the `fastapi run` command if the environment is activated or if you install via `pip`.

```sh
python app.py
```

:::


### Send some request

From code:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="python" label="Python Requests" default>
    ```python
    import requests

    url = "http://127.0.0.1:8000/image/face"

    files = { "image": "open('image', 'rb')" }

    response = requests.post(url, files=files)

    print(response.json())
    ```
  </TabItem>
  <TabItem value="curl" label="cURL">
    ```bash
    curl --request POST \
    --url http://127.0.0.1:8000/image/face \
    --header 'content-type: multipart/form-data' \
    --form image=@image
    ```
  </TabItem>
</Tabs>

Or you can use SwaggerUI.

Go to http://127.0.0.1:8000/docs#/Image/face_image_image_face_post
