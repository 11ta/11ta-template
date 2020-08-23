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
	g_pageWidth: 'max-w-5xl px-4 md:pl-16 lg:pl-32',
	g_showTagPills: true,
	/**
	 * ===== Display Author Blocks =====
	 * Set below to 'false' to globally disable Author Avatars
	 * and links to author's page on Post/Blog listings.
	 *
	 * To use Authors you need to do the following:
	 *  1. Create square .JPG images for each author,
	 *  2. Place them in the `/src/assets/images/authors/` directory,
	 *  3. Use file naming syntax "first-last.jpg" (lowercase version of Author's name)
	 *      NOTE: If the avatar images are not named the same as the Author's name, they won't display.
	 *  4. If you leave the "author" frontmatter value empty, it will disable display for that post only.
	 */
	g_showAuthors: true,

	/**
	 * ===== Post List Style Options =====
	 * You can currently set one of the following 3 options for how
	 * the posts/blog listing page displays.
	 * The templates are located in /src/includes/components/[name].njk
	 *  1. postslist = Simple listing w/ Title, Date, Tags, Author (if set)
	 *  2. postslistpics = Same as above with thumbnails
	 *  3. postslistcards = Nice cards with Author/Date block
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
	 */
	tagListStyle: '',
}
