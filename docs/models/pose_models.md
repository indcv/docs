# Supported pose models

All supported models, as well as those to be added, give out body keypoints.

## Yolo11s-Pose

- **input image size**: `640x640`
- **output embeddings length**: `3x17` (17 keypoints: _x_, _y_, _conf_)

<details>
  <summary>Body keypoints mapping</summary>
    - **0**: `Nose`
    - **1**: `Left Eye`
    - **2**: `Right Eye`
    - **3**: `Left Ear`
    - **4**: `Right Ear`
    - **5**: `Left Shoulder`
    - **6**: `Right Shoulder`
    - **7**: `Left Elbow`
    - **8**: `Right Elbow`
    - **9**: `Left Wrist`
    - **10**: `Right Wrist`
    - **11**: `Left Hip`
    - **12**: `Right Hip`
    - **13**: `Left Knee`
    - **14**: `Right Knee`
    - **15**: `Left Ankle`
    - **16**: `Right Ankle`
</details>
