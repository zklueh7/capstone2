\echo 'Delete and recreate catchapp db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE catchapp;
CREATE DATABASE catchapp;
\connect catchapp

\i catchapp-schema.sql
\i catchapp-seed.sql

\echo 'Delete and recreate catchapp_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE catchapp_test;
CREATE DATABASE catchapp_test;
\connect catchapp_test

\i catchapp-schema.sql
