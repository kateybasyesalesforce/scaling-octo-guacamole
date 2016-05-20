<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'portfolio');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '}JGiar>#}=Q;Mk~-42Zb8}d7s2Ma[gg`qy8+6wPsd>LmF%-:wHtmlO=zLwhG>2iH');
define('SECURE_AUTH_KEY',  '-1G+uB%{ rZZj PL&x{5XUi8mu#Zk9v-XD*Ac}K,XmJ~xRra![3vx)<n/+e0Ypii');
define('LOGGED_IN_KEY',    '6iGvQ}X/!LykG0;Cyx/@4kfu*JRe6q+bN1;{@Ybo_{,0;Kld.x}DZ+VWt$+!C:e;');
define('NONCE_KEY',        'dl.ptIo)ymdh}j]:0w~1)rD%NXIIakB/L)x_+{5_RQ[wW{[ pgZ6Ng^`#V Y@}](');
define('AUTH_SALT',        '4}cnBZT!I5-tS2wfGn.[~&oG8TV&h3Sbd|32mYV*_pW7f{`k^WY|3=S=o*COkG;a');
define('SECURE_AUTH_SALT', 'X`$`d6M{*NNK4loc&C63B{#t=Sc1s#* L7+K}L}YN!j,(i>}bbd$H4sagB[h}C]z');
define('LOGGED_IN_SALT',   'Us|Dimzg?iCGJR)UN6yyO$u[bb<U@+3X[<hyYg]H+QbVTx>}6d4Xz*46_96nVEp`');
define('NONCE_SALT',       's, I/8r_kN-a]zMfxVI(m;,84Q=)0x*snv?8ZJmU xbg]ksfuQ!a_~.]xioEE#e-');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
