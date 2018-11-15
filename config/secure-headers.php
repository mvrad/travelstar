<?php

return [
    // Safe Mode
    'safeMode' => false,

    // HSTS Strict-Transport-Security
    'hsts' => [
        'enabled' => true,
    ],

    // Content Security Policy
    'csp' => [
        'default' => [
            'self',
        ],
        'img-src' => [
            '*', // Allow images from anywhere
        ],
        'style-src' => [
            'self',
            'unsafe-inline', // Allow inline styles
            'https://fonts.googleapis.com', // Allow stylesheets from Google Fonts
        ],
        'font-src' => [
            'self',
            'https://fonts.gstatic.com', // Allow fonts from the Google Fonts CDN
        ],
    ],
];