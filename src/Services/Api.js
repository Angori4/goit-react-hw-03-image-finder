export const fetchImage = (imgName, page = 1) => {
  return fetch(
    `https://pixabay.com/api/?key=33044994-c2ced58164f7879a8375986b7=${imgName}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=12`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`error ${this.props.prevProps}`));
  });
};
