import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {

  render() {

    return (
      <div className="flex-container">
        {
          entries.itemlist.map((photo) => {
            return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} />
          })
        }
        {/* <PhotoEntry src="Peru01.jpg" location="Chinchero, Perú - 2019" caption="Tejedora" /> */}
      </div>
    )

  }

}

export default AlbumMaker;
