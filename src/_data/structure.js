module.exports = {
	/** ===== Globals =====
	 * In this section we can control Global structural items like
	 * pageWidth, margins, paddings, etc.
	 * Only structural elements that probably won't be changed by editors,
	 * and won't be changed much/ever once the site is in production.
	 * For example, "g_pageWidth" manages both the Nav and the Page content
	 * across the entire site so there is consistency on margins, padding, max width
	 * at all screen sizes.
	 */
	g_pageWidth: 'max-w-screen-xl px-8 md:px-16 lg:px-32',

	/**
	 * Globally disable display of Tag pills/links
	 */
	g_showTagPills: true,

	/**
	 * Set alignment of Pagination links on Post Listing views.
	 * NOTE: Pagination tabs don't display if not required.
	 * This is controled in the Frontmatter of the listing template
	 *
	 * Options = start, center, end
	 */
	g_alignPagination: 'center',

	/**
	 * ===== Display Post Excerpt on Posts List =====
	 * Set below to 'false' to globally disable Excerpt on the Posts List (/blog)
	 *
	 */
	g_showExcerpt: true,

	/**
	 * ===== Display Author Blocks =====
	 * Set below to 'false' to globally disable Author Avatars
	 * and links to author's page on Post/Blog listings.
	 *
	 * Add and Manage Author data in src/_data/authors.json
	 */
	g_showAuthors: true,

	/**
	 * ===== Display Footer & Social Share Icons =====
	 *
	 * Set to fully disable display of the Social Links in the footer.
	 * These social platform links are managed in the _data/social.json file.
	 * *** It may have made sense to just put them here....but they were in social.json
	 * *** before this file existed. :-)
	 * I might move stuff around on the next version...
	 */
	g_showFooterSocialIcons: true,
	/**
	 * Set to 'false' to disable the "Share:" icons on the Post Detail views.
	 * You can also set individual platforms to 'false' to disable just those platforms.
	 * NOTE: We don't support Facebook (and deleted our Profiles and Pages in 2017) so
	 * if you want Facebook support you'll have to build it yourself.
	 * https://deletefacebook.com/
	 */
	g_showSocialShareIcons: true,
	// Display individual Share Icons. Above must be 'true' for items below to display.
	g_showShareLinkedIn: true,
	g_showSharePinterest: true,
	g_showShareReddit: true,
	g_showShareTwitter: true,
	g_showShareEmail: true,

	/**
	 * ===== Home Page Carousel & Hero Controls =====
	 */

	/**
	 * ===== Post List Style Options =====
	 * You can currently set one of the following 4 options for how
	 * the posts/blog listing page displays.
	 * The templates are located in /src/_includes/components/[name].njk
	 *  1. postslist = Text link list, just Title, Date/Author, excerpt
	 *  2. postslistblocks = Simple listing w/ Title, Date, Tags, Author (if set)
	 *  3. postslistthumbs = Same as above with thumbnails
	 *  4. postslistcards = Nice cards with Author/Date block
	 *
	 * NOTE: If you want to make your own list layouts, you can duplicate
	 *        any of the existing layouts and modify as you want.
	 *        Then just add them to the list above
	 *        (makeing sure to name correctly)
	 *        and they'll then be available for using below in
	 *        'postListStyle' and 'tagListStyle.'
	 *
	 * */
	postListStyle: 'postslistcards',

	/**
	 * ===== Tag List Style Options =====
	 * You can set the Tag List style separately from Post List above.
	 * If you want Tag List to use the same layout as Post List,
	 * you can leave it empty below.
	 *
	 * For example, given tag "frontmatter", the Tag List would be found at
	 * http://localhost:8080/tags/frontmatter/ during development and
	 * https://your-domain/tags/frontmatter/ in production
	 *
	 */
	tagListStyle: '',
}
