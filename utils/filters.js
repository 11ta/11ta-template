const { DateTime } = require('luxon')

module.exports = {

  /**
   * Filters
   * @link https://www.11ty.io/docs/filters/
   */

   /**
    * dateToFormat allows specifiying display format at point of use.
    * Example in footer: {{ build.timestamp | dateToFormat('yyyy') }}
    * uses .timestamp from the _data/build.js export and formats it via dateToFormat below
    */
  dateToFormat: (date, format) => {
    return DateTime.fromJSDate(date, { 
      zone: 'utc'
    }).toFormat(String(format))
  },

  htmlDateString: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yyyy-LL-dd');
  },

  /**
   * Date for Permalinks when working with old /YYYY/MM/DD/slug format from Wordpress exports
   * @link https://wp11.netlify.app
   * Used in building Permalinks in /src/posts/posts.json
   * @link /src/posts/posts.json
   */
  dateToPermalink: (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('yyyy/MM/dd');
  },


}