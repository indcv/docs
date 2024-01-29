---
sidebar_position: 2
---

# Installation

The library contains a few versions:
- `Basic`: for use within your project;
- `Web`: provides web endpoints;
- `Dev`: development and testing version.

Download [repo](https://github.com/indcv/industrialCV):

```bash
git clone https://github.com/indcv/industrialCV.git
```

After that, move to the library directory:

```bash
cd industrialCV
```

If required, create or activate a virtual environment:

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="unix" label="Unix/macOS" default>
    ```bash
    python3 -m venv env
    source env/bin/activate
    ```
  </TabItem>
  <TabItem value="win" label="Windows">
    ```bash
    python -m venv env
    . env\Scripts\activate
    ```
  </TabItem>
</Tabs>

Next, specify which version you want to install:

<Tabs>
  <TabItem value="basic" label="Basic" default>
    ```bash
    # Basic version
    pip install -e .
    ```
  </TabItem>
  <TabItem value="web" label="Web">
    ```bash
    # Web version
    pip install -e '.[web]'
    ```
  </TabItem>
  <TabItem value="dev" label="Dev">
    ```bash
    # Developer version
    pip install -e '.[dev]'
    ```
  </TabItem>
</Tabs>
