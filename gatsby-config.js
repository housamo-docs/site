const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Title from siteMetadata 233'
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: path.resolve(__dirname, './src')
      }
    },
    'gatsby-plugin-typescript',
    {
      resolve: 'gatsby-plugin-styled-components',
      options: {
        // Add any options here
      }
    },
    'gatsby-plugin-top-layout',
    'gatsby-plugin-react-helmet'
    // {
    //   // Querying to a SQLite database
    //   resolve: `gatsby-source-sql`,
    //   options: {
    //     typeName: 'Nirvana',
    //     // This is the field under which the data will be accessible in a future version
    //     fieldName: 'chinook',
    //     dbEngine: {
    //       client: 'sqlite3',
    //       connection: {
    //         filename: './data/Chinook_Sqlite.sqlite'
    //       },
    //       useNullAsDefault: true
    //     },
    //     queryChain: function(x) {
    //       return x
    //         .select(
    //           'Track.TrackId as TrackId',
    //           'Track.Name as Track',
    //           'Album.Title as Album',
    //           'Genre.Name as Genre',
    //           'Artist.Name as Artist'
    //         )
    //         .from('Track')
    //         .innerJoin('Album', 'Album.AlbumId', 'Track.AlbumId')
    //         .innerJoin('Artist', 'Artist.ArtistId', 'Album.ArtistId')
    //         .innerJoin('Genre', 'Genre.GenreId', 'Track.GenreId')
    //         .where('Artist.Name', '=', 'Nirvana');
    //     }
    //   }
    // }
  ]
};
