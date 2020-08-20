module.exports = {
	/**
	 * ===== Post List Style Options =====
	 * You can currently set one of the following 3 options for how
	 * the posts/blog listing page displays.
	 * The templates are located in /src/includes/components/[name].njk
	 *  1. postlistsimple = Title, Date, Tags, Author (if set)
	 *  2. postlist =
	 *  3. postlistpics =
	 *
	 * */
	postListStyle: 'postslistsimple',

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
	displayAuthors: true,
}
