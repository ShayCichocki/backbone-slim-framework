<?php
//Driver for slim app
require '../vendor/autoload.php';
use SlimServices\ServiceManager;
$app = new \Slim\Slim(array(
  'templates.path' => '.',
  'path' => '.',
  'locale' => 'en'
));
require_once __DIR__ . '/../app/app.php';
$app->view(new \Slim\Views\Twig());
$app->view->parserOptions = array(
  'charset'          => 'utf-8',
  'cache'            => false,
  'auto_reload'      => true,
  'strict_variables' => true,
  'autoescape'       => true
);
$app->view->parserExtensions = array(new \Slim\Views\TwigExtension());
$app->run();
