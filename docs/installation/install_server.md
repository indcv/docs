---
sidebar_position: 1
---

# Install server



Download [repo](https://github.com/indcv/indcv-server):

```bash
git clone https://github.com/indcv/indcv-server.git
```

After that, move to the library directory:

```bash
cd indcv-server
```

If required, create or activate a virtual environment and install dependencies:

> We recommend using [uv](https://docs.astral.sh/uv/).

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="uv" label="uv" default>
    ```sh
    uv venv

    source .venv\bin\activate # Linux
    .venv\Scripts\activate # Windows

    uv sync
    ```
  </TabItem>
  <TabItem value="pip" label="pip">
    ```bash
    python -m venv .venv

    source .venv\bin\activate # Linux
    .venv\Scripts\activate # Windows

    pip install -r requirements.txt
    ```
  </TabItem>
</Tabs>
