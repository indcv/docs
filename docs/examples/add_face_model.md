---
sidebar_position: 4
description: Create new model for facial recognition
---

# Add face model

:::note

At this time, only models in *ONNX* format are supported. Support for other alternatives in the roadmap.

:::

## Add model ONNX file

All model files are stored in the `onnx_models` folder.

## Create new model file

Create new file in `indcv_server/model/face` with filename _my_new_model.py_

### Add required import

```python title="indcv_server/model/face/my_new_model.py"
from pathlib import Path

import onnxruntime as rt

import indcv_server.common.distances as distance
from config import config
from indcv_server.model.face.face_model import FaceModel
```

### Create model class

All models for face recognition inherit from the abstract class [FaceModel](https://github.com/indcv/indcv-server/blob/main/indcv_server/model/face/face_model.py#L7).
In this case, all abstract methods and meta data must be implemented.

```python title="indcv_server/model/face/my_new_model.py"
class MyNewFaceModel(FaceModel):
    """My New face model class"""

    def __init__(self, model_path):
        """
        Create new My New model for embeddings.

        Args:
            model_path (Union[Path, str]): ONNX model filepath
        """
        pass

    def find_embeddings(self, image):
        """
        Find embeddings for image.

        Args:
            image (np.ndarray): image object

        Returns:
            list[float]: list of embeddings
        """
        pass
```

### Add model meta data fields

```python title="indcv_server/model/face/my_new_model.py"
class MyNewFaceModel(FaceModel):
    # highlight-start
    model_name = "My New Model" # Model name. Using in config file and server response
    model_type = "face" # Default for all face models
    model_input_size = (128, 128) # Your model input dimensions
    model_embeddings_len = 1024 # Your model embeddings length
    # highlight-end
```


### Implement `__init__` and `find_embeddings` methods.

:::info

- The inference session must **necessarily** be saved to the model variable.
- The return value from ` find_embeddings` must **necessarily** be of type list of floats.

:::


```python title="indcv_server/model/face/my_new_model.py"
def __init__(self, model_path):
    # highlight-start
    # Specify the providers you need
    providers = ["CUDAExecutionProvider", "CPUExecutionProvider"]
    # Save inference session in `model` (required!)
    self.model = rt.InferenceSession(model_path, providers=providers)
    # highlight-end

def find_embeddings(self, image):
    # highlight-start
    # Get embeddings from model
    embeddings = self.model.run(["output"], {"input": image})
    # Normalize embeddings by L2
    embeddings = distance.l2_normalization(embeddings)
    return embeddings.tolist()
    # highlight-end
```

## Update supported model list

Add your model in models settings file in the end of list.

```python title="indcv_server/common/models_settings.py"
from indcv_server.model.face import face_model, my_new_model

# List of all supported face models
supported_face_models = [
    ...,
    # highlight-start
    my_new_model.MyNewFaceModel
    # highlight-end
]
```

## Update dotenv file

Find strings in your dotenv file:

```ini title=".env"
FACE_MODEL_NAME = "Old model"
FACE_MODEL_PATH = "onnx_models/old_model.onnx"
```

And change for your new model:

```ini title=".env"
FACE_MODEL_NAME = "My New Model"
FACE_MODEL_PATH = "onnx_models/my_new_model.onnx"
```

:::note

`FACE_MODEL_NAME` value comes from `model_name` field in [MyNewFaceModel](#add-model-meta-data-fields) class.

:::

And now you can use new model.
