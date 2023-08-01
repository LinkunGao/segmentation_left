# segmentation_left

- This is a special version of segmentaion app. 
- It just a frontend app, without backend code it cannot work correctly.

## how to use this frontend in your project

- You should run it locally 
- In your fontend code, you can create a button or somecthing can link to this app under a dicom case
- The url for the button to link this app:
    ```bash
    http://localhost:5173/NRRD_Segmentation_Tool/your_case_name
    ```
- The case_name should be same with the case name in backend and in manifest.csv


## how to run this project

- for docker developer

```bash
cd ./segmentation_left
docker-compose up
```

- for localhost developer

```bash
cd ./segmentation_left
npm i / yarn
npm run dev / yarn dev
```