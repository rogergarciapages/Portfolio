#!/usr/bin/env node
process.env.ASTRO_TELEMETRY_DISABLED = '1';
import('./node_modules/astro/astro.js');
