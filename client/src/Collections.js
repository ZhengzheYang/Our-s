import React from 'react';
import Photo from './OnePhoto'

class Collections extends React.Component {
  LoadImages = () => {
    const images = this.importAll(require.context('./images/', false, /\.(png|jpe?g)$/));
    const collection = images.map((image) => (
      <Photo img={image}></Photo>
    ));

    return (
      <div>
        { collection }
      </div>
    );
  };

  importAll = (r) => {
    return r.keys().map(r);
  };

  render() {
    return (
      <div>
        <this.LoadImages />
      </div>
    );
  }
}

export default Collections

// const CommentList = (props) => {
//   const commentNodes = props.data.map(comment => (
//     <Comment
//       author={comment.author}
//       key={comment._id}
//       id={comment._id}
//       timestamp={comment.updatedAt}
//       handleUpdateComment={props.handleUpdateComment}
//       handleDeleteComment={props.handleDeleteComment}
//     >
//       { comment.text}
//     </Comment>
//   ));
//   return (
//     <div>
//       { commentNodes }
//     </div>
//   );
// };
