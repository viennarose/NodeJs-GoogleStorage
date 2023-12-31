function uuidv4() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }

document.getElementById('submitBtn').addEventListener('click', () => {
    let postid = uuidv4();
    let inputElem = document.getElementById('imgfile');
    let file = inputElem.files[0];

    let blob = file.slice(0, file.size, "image/jpeg");
    newFile = new File([blob], `${postid}_post.jpeg`, { type: "image/jpeg" });

    let formData = new FormData();
    formData.append("imgfile",)
});