import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {

  return (
    <ol className="col-md-4 list-group">
      {props.videos.length}
    </ol>
  );
};

export default VideoList;
