<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'hotel.igoudarr' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '9l2iapatpa2eeixgkv39i8unwwvjnyuv8iqihokk2wdtdmx8lrxv4ltliqi3vtvi' );
define( 'SECURE_AUTH_KEY',  'ralisrmyytm6teppjmemdpggaghna2cxamaplmxllwhp6iiaw55e2e1x1nx87jmx' );
define( 'LOGGED_IN_KEY',    'y0dfrgsizdccdg9c1iyvd5se4m4qxoltfru8jrcltlbic0hhou1kgkzqp7zmrnhl' );
define( 'NONCE_KEY',        'ycqqoseooodkc8wioniluefjflalh59t4wwkyqmuutl2js80l7hdmwtytuol7kof' );
define( 'AUTH_SALT',        'a0mcsfdnj6yyxgphsnmdr6zwt6fz8qqk3c4sthhuvk3krzossaf2gj0ziomnoxwv' );
define( 'SECURE_AUTH_SALT', 'oaa5qr1wos5sp97m2o9gg1utmhoj2o1a4a8xh5dagd1iwqrctspufzzyutxve0si' );
define( 'LOGGED_IN_SALT',   '8xt7nyovfutcqaqn8b9a2m0uowhgp91wkyk5jxdz4ovu0ff31rs9kwjdxu65clrk' );
define( 'NONCE_SALT',       'wxj3lnwngotvuifw0bajbrzfbd0qfyuti3vuj92yfezkejdqmgyvl4tvmckfkbpm' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpx0_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
