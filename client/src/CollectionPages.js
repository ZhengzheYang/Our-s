import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'whatwg-fetch';
import Lightbox from 'react-images';
import PropTypes from 'prop-types';
import { css, StyleSheet } from 'aphrodite/no-important';



const mapImage = (image) => {
		return {
		        src: image.path,
		        thumbnail: image.path,
		        thumbnailWidth: 100,
		        thumbnailHeight: 100,
		        isSelected: false,
		        _id: image._id
		}
}

// Chengdu
class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      collection: null,
      images: [],
      lightboxIsOpen: false,
			currentImage: 0,
    };
    this.image_paths = [];

    this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
  }

  componentDidMount() {
    this.loadImages();
  }

  // componentDidUpdate() {
  //   // this.allImages(this.state.images);
  //
  // }

  componentWillUnmount() {
    this.setState({
      collection: null,
      images: [],
      lightboxIsOpen: false,
			currentImage: 0,
    });
  }

  openLightbox (index, event) {
		event.preventDefault();
		this.setState({
			currentImage: index,
			lightboxIsOpen: true,
		});
	}
	closeLightbox () {
		this.setState({
			currentImage: 0,
			lightboxIsOpen: false,
		});
	}
	gotoPrevious () {
		this.setState({
			currentImage: this.state.currentImage - 1,
		});
	}
	gotoNext () {
		this.setState({
			currentImage: this.state.currentImage + 1,
		});
	}
	gotoImage (index) {
		this.setState({
			currentImage: index,
		});
	}
	handleClickImage () {
		if (this.state.currentImage === this.state.images.length - 1) return;

		this.gotoNext();
	}

  loadImages = () => {
    fetch("/images")
      .then(data => data.json())
      .then((res) => {
        // console.log(res);
        const newData = this.state.images.slice()    //now only one image for testing
        newData.push(...res)
        // console.log(newData);
        this.setState({ images: newData }, () => {
          // console.log("jack");
          // console.log(this.state);
          this.image_paths.push(...this.state.images.map((img) => ({ src: img.path })));
        });
        // this.setState({ images: newData });
      });
  }

  // allImages = (images) => {
  //   const collection = images.map();
  //   // console.log(collection);
  //
  //   return(
  //       <Lightbox
  //         images={collection}
  //         isOpen={this.state.lightboxIsOpen}
  //         onClickPrev={this.gotoPrevious}
  //         onClickNext={this.gotoNext}
  //         onClose={this.closeLightbox}
  //       />
  //   );
  // }

  // renderGallery () {
	// 	// const { images } = this.state.images.map((img) => (
  //   //   { src: img.path }
  //   // ));
  //   const images = [{src: "./images/IMG477.jpeg"}];
  //   // console.log(this.state.currentImage);
  //
	// 	if (images.length === 0) {
  //     console.log("jack");
  //     return;
  //   }
  //
	// 	const gallery = images.map((obj, i) => {
  //     // console.log(obj);
	// 		return (
	// 			<a
	// 				href={obj.src}
	// 				className={css(classes.thumbnail, classes[obj.orientation])}
	// 				key={i}
	// 				onClick={(e) => this.openLightbox(i, e)}
  //   >
	// 				<img src={obj.thumbnail} className={css(classes.source)} />
	// 			</a>
	// 		);
	// 	});
  //
	// 	return (
	// 		<div className={css(classes.gallery)}>
	// 			{gallery}
	// 		</div>
	// 	);
	// }

  getImages(){
		// const { images, imageSize } = this.props;
    // const images = this.sta
		const mappedImages = this.state.images.map(image => mapImage(image));
    // console.log(mappedImages);

		if (mappedImages && mappedImages.length > 0 ) {
  		return mappedImages.map((image, i) => {
  			return (
  				<div key={image._id}>
            <img src={require(`${image.src}`)} style={{width: '100%', height: '100%' }} />
  				</div>
  			);
  		})
		}

	}

  render() {
    // const { images,  height } = this.props;
		const mappedImages = this.state.images.map(image => mapImage(image));

		if (!mappedImages || mappedImages.length === 0 ) {
			return null;
		}

    return (
        /* <Lightbox
          images={this.state.images.map((img) => (
            { src: img.path }
          ))}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.closeLightbox}
        /> */
        <div>
          {/* {this.props.heading && <h2>{this.props.heading}</h2>}
          {this.props.subheading && <p>{this.props.subheading}</p>} */}
          {/* {this.renderGallery()} */}
          <Lightbox
            currentImage={this.state.currentImage}
            images={mappedImages}
            isOpen={this.state.lightboxIsOpen}
            onClickImage={this.handleClickImage}
            onClickNext={this.gotoNext}
            onClickPrev={this.gotoPrevious}
            onClickThumbnail={this.gotoImage}
            onClose={this.closeLightbox}
            // preventScroll={this.props.preventScroll}
            // showThumbnails={this.props.showThumbnails}
            // spinner={this.props.spinner}
            // spinnerColor={this.props.spinnerColor}
            // spinnerSize={this.props.spinnerSize}
            // theme={this.props.theme}
          />
          {/* {this. getImages()} */}
        </div>
    );
  }
}

Gallery.displayName = 'Gallery';
// Gallery.propTypes = {
// 	heading: PropTypes.string,
// 	images: PropTypes.array,
// 	showThumbnails: PropTypes.bool,
// 	subheading: PropTypes.string,
// };

const gutter = {
	small: 2,
	large: 4,
};
const classes = StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large,
		},
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large,
		},
	},

	// orientation
	landscape: {
		width: '30%',
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0,
		},
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	},
});

export {
  Gallery,
}
