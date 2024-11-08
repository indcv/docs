---
sidebar_position: 3
---

# Configure server

As seen in the testing step, the server can be configured using a `.env` config file.


List of all available parameters:


| Parameter            |            | Description                                                        | Default value | Example                          |
| -------------------- | ---------- | ------------------------------------------------------------------ | ------------- | -------------------------------- |
| `LEVEL`              | _Optional_ | Log level                                                          | "DEBUG"       | "ERROR"                          |
| `API_URL`            | _Optional_ | Server URL                                                         | "127.0.0.1"   | "192.168.1.5"                    |
| `API_PORT`           | _Optional_ | Port for client connections                                        | "8000"        | "8080"                           |
| `DB_FILEPATH`        | _Optional_ | DB filepath. If empty DB works in memory                           | ""            | "database.db"                    |
| `INIT_DB`            | _Optional_ | Manual initialization with data from disk. True for in-memory mode | False         | True                             |
| `DOCS_ENABLE`        | _Optional_ | Enable SwaggerUI                                                   | False         | True                             |
| `FACE_MODEL_NAME`    |            | ONNX face model name                                               |               | "VGG-Face"                       |
| `FACE_MODEL_PATH`    |            | Path to ONNX face model                                            |               | "onnx_models/vgg_face.onnx"      |
| `FACE_DETECTOR_NAME` |            | Face detector name                                                 |               | "OpenCV"                         |
| `FACE_DETECTOR_PATH` | _Optional_ | Path to detector model                                             | ""            | "onnx_models/face_detector.onnx" |
| `EXEC_PROVIDER`      | _Optional_ | Model execution provider ([ONNX docs](https://onnxruntime.ai/docs/execution-providers/#summary-of-supported-execution-providers))                                           | "CPU"         | "CUDA"                           |
| `FACE_IMAGES_PATH`   |            | Folder with face images                                            |               | "face_img"                       |
