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
POSE_MODEL_NAME = "YOLO11s-Pose"
POSE_MODEL_PATH = "onnx_models/yolo11s_pose.onnx"
FACE_IMAGES_PATH = "face_img/"
```

You can read more about the configuration file parameters on [this page](./dotenv.md).

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


### Face recognition

Send some request:


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

Or you can use [SwaggerUI](http://127.0.0.1:8000/docs#/Image/face_image_image_face_post).

<details>
  <summary>`image/face` endpoint response example</summary>

  ```json
  {
    "input_image": {
      "image_name": "cam_frame.jpg",
      "image_type": "image/jpeg"
    },
    "predict_info": {
      "face_count_limit": 2,
      "found_face_count": 1,
      "show_only_known": true,
      "similarity_metric": "cosine",
      "metric_threshold": 0.68,
      "face_model_name": "VGG-Face",
      "face_detector_name": "OpenCV",
      "runtime_name": "ONNX"
    },
    "persons": [
      {
        "name": "Developer1",
        "db_image_name": "img2.jpg",
        "facial_positions": {
          "x": 280,
          "y": 413,
          "w": 364,
          "h": 364
        },
        "metric_result": 0.5288819074630737,
        "level": {
          "name": "Machine Developer",
          "value": 1
        },
        "verified": true
      }
    ],
    "level": {
      "name": "Machine Developer",
      "value": 1
    },
    "verified": true
  }
  ```
</details>



### Body position detection

Send some request:

<Tabs>
  <TabItem value="python" label="Python Requests" default>
    ```python
    import requests

    url = "http://127.0.0.1:8000/image/pose"

    files = { "image": "open('image', 'rb')" }

    response = requests.post(url, files=files)

    print(response.json())
    ```
  </TabItem>
  <TabItem value="curl" label="cURL">
    ```bash
    curl --request POST \
    --url http://127.0.0.1:8000/image/pose \
    --header 'content-type: multipart/form-data' \
    --form image=@image
    ```
  </TabItem>
</Tabs>

Or you can use [SwaggerUI](http://127.0.0.1:8000/docs#/Image/pose_image_image_pose_post).


<details>
  <summary>`image/pose` endpoint response example</summary>

  ```json
  {
    "input_image": {
      "image_name": "pose_img.jpg",
      "image_type": "image/jpeg"
    },
    "predict_info": {
      "body_count_limit": 2,
      "found_body_count": 1,
      "pose_model_name": "YOLO11s-Pose",
      "pose_detector_name": "No detector",
      "runtime_name": "ONNX"
    },
    "bodies": [
      {
        "keypoints": [
          {
            "x": 484.4656982421875,
            "y": 574.7867431640625,
            "conf": 0.9936436414718628,
            "name": "Nose"
          },
          {
            "x": 494.17779541015625,
            "y": 553.1141357421875,
            "conf": 0.8340397477149963,
            "name": "Left Eye"
          },
          {
            "x": 462.32354736328125,
            "y": 559.4806518554688,
            "conf": 0.9945005178451538,
            "name": "Right Eye"
          },
          {
            "x": -1.0,
            "y": -1.0,
            "conf": -1.0,
            "name": "Left Ear"
          },
          {
            "x": 408.8036804199219,
            "y": 544.25537109375,
            "conf": 0.9873433113098145,
            "name": "Right Ear"
          },
          {
            "x": 511.34478759765625,
            "y": 597.81494140625,
            "conf": 0.9963276386260986,
            "name": "Left Shoulder"
          },
          {
            "x": 357.67901611328125,
            "y": 625.6773681640625,
            "conf": 0.9994179606437683,
            "name": "Right Shoulder"
          },
          {
            "x": 574.4158935546875,
            "y": 738.885009765625,
            "conf": 0.9799138903617859,
            "name": "Left Elbow"
          },
          {
            "x": 369.6923828125,
            "y": 804.1904907226562,
            "conf": 0.9988439083099365,
            "name": "Right Elbow"
          },
          {
            "x": 636.7947998046875,
            "y": 837.0205688476562,
            "conf": 0.9805736541748047,
            "name": "Left Wrist"
          },
          {
            "x": 502.52777099609375,
            "y": 892.4943237304688,
            "conf": 0.9977067112922668,
            "name": "Right Wrist"
          },
          {
            "x": 452.3871765136719,
            "y": 826.8756103515625,
            "conf": 0.9967901110649109,
            "name": "Left Hip"
          },
          {
            "x": 354.306640625,
            "y": 844.574951171875,
            "conf": 0.9982871413230896,
            "name": "Right Hip"
          },
          {
            "x": 474.8944091796875,
            "y": 1013.6058959960938,
            "conf": 0.9234016537666321,
            "name": "Left Knee"
          },
          {
            "x": 368.37646484375,
            "y": 1045.92919921875,
            "conf": 0.961061954498291,
            "name": "Right Knee"
          },
          {
            "x": -1.0,
            "y": -1.0,
            "conf": -1.0,
            "name": "Left Ankle"
          },
          {
            "x": -1.0,
            "y": -1.0,
            "conf": -1.0,
            "name": "Right Ankle"
          }
        ],
        "score": 0.9405144453048706,
        "box": {
          "x1": 289,
          "y1": 445,
          "x2": 709,
          "y2": 1065
        }
      }
    ]
  }
  ```
</details>
