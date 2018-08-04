import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { css, StyleSheet } from 'aphrodite/no-important';
import Lightbox from 'react-images';
import Threebars from './svg/three-bars.svg'
import { scroller } from 'react-scroll';
import { slide as Menu } from 'react-burger-menu';
import { fileNames } from './Collections';
// import Octicons from 'octicons';
// import OneCard from './OneCard';


const OneCard = (props) => {
  return (
    <div className="card">
      <img className="card-img" src={props.img} alt="sorry"/>
    </div>
  );
}

const mapImage = (image) => {
	return {
    src: require(`${image.path}`),
    thumbnail: require(`${image.path}`),
    thumbnailWidth: 100,
    thumbnailHeight: 100,
    isSelected: false,
    caption: `By ${image.author}`,
    _id: image._id
	}
}

const filenameToLink = (filename) => {
  let name = filename.split(".")[0];
  return (
    <div className="menu-block">
      <a className="menu-item" href={"/" + name}>{name}</a>
    </div>
  );
}

// const Links = fileNames.map((filename) => filenameToLink(filename))

class Gallery extends Component {
	constructor (props) {
		super(props);

		this.state = {
			lightboxIsOpen: false,
			currentImage: 0,
      images: [],
      menuOpen: false,
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoImage = this.gotoImage.bind(this);
		this.handleClickImage = this.handleClickImage.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.openMenu = this.openMenu.bind(this);
	}

  // handle the scoll event by adding a listener
  componentDidMount() {
    console.log(fileNames)
    this.loadImages();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.setState({
      collection: null,
      images: [],
      lightboxIsOpen: false,
			currentImage: 0,
      menuOpen: false,
    });
      window.removeEventListener('scroll', this.handleScroll);
  }

  // use react-scroll to scroll smoothly
  handleScroll = (event) => {
    scroller.scrollTo(100);
  };

  loadImages = () => {
    // console.log(this.props.collection)
    fetch("/images")
      .then(data => data.json())
      .then((res) => {
        console.log(res)
        const newData = this.state.images.slice()    //now only one image for testing
        newData.push(...res[0][this.props.collection])
        this.setState({ images: newData });
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
		if (this.state.currentImage === this.state.images.length - 1) {
      // console.log("jack");
      this.gotoImage(0);
    }

		this.gotoNext();
	}
	renderGallery () {
		// const { images } = this.props;
    const images = this.state.images.map(image => mapImage(image));

    // let img_1 = images[0];
    // let img_2 = images[1];
    // for(let i = 0; i < 10; i++) {
    //   if(img_1 && img_2) {
    //     if (i % 2 === 0){
    //       images.push(img_2)
    //     }
    //     else{
    //       images.push(img_1)
    //     }
    //   }
    // }


		if (!images || images.length === 0) return;

		const gallery = images.map((obj, i) => {
			return (
				<div className={css(classes.thumbnail)}
          onClick={(e) => this.openLightbox(i, e)} style={{cursor:'pointer'}}>
					<OneCard img={obj.src} key={i}></OneCard>
        </div>
			);
		});

		return (
      <div className="card-columns">
        {gallery}
      </div>
		);
	}

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen});
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu () {
    this.setState({menuOpen: false});
  }

  openMenu () {
    this.setState({menuOpen: true});
  }

	render () {
    const mappedImages = this.state.images.map(image => mapImage(image));

    // let img_1 = mappedImages[0];
    // let img_2 = mappedImages[1];
    // for(let i = 0; i < 10; i++) {
    //   if(img_1 && img_2) {
    //     if (i % 2 === 0){
    //       mappedImages.push(img_2)
    //     }
    //     else{
    //       mappedImages.push(img_1)
    //     }
    //   }
    // }

		if (!mappedImages || mappedImages.length === 0 ) {
			return null;
		}

		return (
      <div>
        <nav className="navbar">
          <div className="navbar-header">
            <a href="/" className="navbar-brand" style={{cursor:'pointer'}}>Our's</a>
          </div>
          <div className="svg-icon svg-icon-rotate" onClick={this.openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
            viewBox="0 0 12 16">
              <path
                d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
              />
            </svg>
          </div>
        </nav>

        <Menu right customBurgerIcon={ false } isOpen={this.state.menuOpen}
          onStateChange={(state) => this.handleStateChange(state)} width={ '50%' }>
          <div className="bm-item">
            {/* <div className="menu-block">
              <a className="menu-item" href="/">Home</a>
            </div> */}
            <div>{fileNames.map((filename) => filenameToLink(filename))}</div>
          </div>
          {/* <div className="bm-item">
            <div className="row justify-content-md-center">
              <div className="col col-3">
            <div className="menu-block">
            <a className="menu-item" href="#">Cityfdfdjffsdkjdkfjdfkdjfd</a>
            </div>
              </div>
            </div>
          </div> */}
        </Menu>

            <div className="container-gallery">
          <div className="container-fluid">
            <div className="text-center">
              <div className="heading">{`${this.props.collection}`}</div>
            </div>
            {this.renderGallery()}
            <Lightbox
              className="light-box"
              currentImage={this.state.currentImage}
              images={mappedImages}
              isOpen={this.state.lightboxIsOpen}
              onClickNext={this.gotoNext}
              onClickPrev={this.gotoPrevious}
              onClickThumbnail={this.gotoImage}
              onClose={this.closeLightbox}
              backdropClosesModal={true}
              preloadNextImage={true}
              preventScroll={this.props.preventScroll}
              showThumbnails={true}
            />
          </div>
        </div>
      </div>
		);
	}
}

// Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	collection: PropTypes.string,
};

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
    position: 'absolute',
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto',
	},
});

export default Gallery;
