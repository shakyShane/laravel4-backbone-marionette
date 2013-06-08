<?php
/**
 * An helper file for Laravel 4, to provide autocomplete information to your IDE
 * Generated with https://github.com/barryvdh/laravel-ide-helper
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */
namespace {
	die('Only to be used as an helper for your IDE');
}

namespace  {
 class App extends Illuminate\Support\Facades\App{
	/**
	 * @var \Illuminate\Foundation\Application $root
	 */
	 static private $root;

	/**
	 * Create a new Illuminate application instance.
	 *
	 * @param \Illuminate\Http\Request $request 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($request = null){
		 static::$root->__construct($request);
	 }

	/**
	 * Set the application request for the console environment.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function setRequestForConsoleEnvironment(){
		 static::$root->setRequestForConsoleEnvironment();
	 }

	/**
	 * Redirect the request if it has a trailing slash.
	 *
	 * @return \Symfony\Component\HttpFoundation\RedirectResponse|null 
	 * @static 
	 */
	 public static function redirectIfTrailingSlash(){
		return static::$root->redirectIfTrailingSlash();
	 }

	/**
	 * Bind the installation paths to the application.
	 *
	 * @param array $paths 
	 * @return void 
	 * @static 
	 */
	 public static function bindInstallPaths($paths){
		 static::$root->bindInstallPaths($paths);
	 }

	/**
	 * Get the application bootstrap file.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getBootstrapFile(){
		return static::$root->getBootstrapFile();
	 }

	/**
	 * Start the exception handling for the request.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function startExceptionHandling(){
		 static::$root->startExceptionHandling();
	 }

	/**
	 * Get the current application environment.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function environment(){
		return static::$root->environment();
	 }

	/**
	 * Detect the application's current environment.
	 *
	 * @param array|string $environments 
	 * @return string 
	 * @static 
	 */
	 public static function detectEnvironment($environments){
		return static::$root->detectEnvironment($environments);
	 }

	/**
	 * Determine if we are running in the console.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function runningInConsole(){
		return static::$root->runningInConsole();
	 }

	/**
	 * Determine if we are running unit tests.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function runningUnitTests(){
		return static::$root->runningUnitTests();
	 }

	/**
	 * Register a service provider with the application.
	 *
	 * @param \Illuminate\Support\ServiceProvider|string $provider 
	 * @param array $options 
	 * @return void 
	 * @static 
	 */
	 public static function register($provider, $options = array()){
		 static::$root->register($provider, $options);
	 }

	/**
	 * Load and boot all of the remaining deferred providers.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function loadDeferredProviders(){
		 static::$root->loadDeferredProviders();
	 }

	/**
	 * Resolve the given type from the container.
	 * 
	 * (Overriding Container::make)
	 *
	 * @param string $abstract 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function make($abstract, $parameters = array()){
		return static::$root->make($abstract, $parameters);
	 }

	/**
	 * Register a "before" application filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function before($callback){
		 static::$root->before($callback);
	 }

	/**
	 * Register an "after" application filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function after($callback){
		 static::$root->after($callback);
	 }

	/**
	 * Register a "close" application filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function close($callback){
		 static::$root->close($callback);
	 }

	/**
	 * Register a "finish" application filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function finish($callback){
		 static::$root->finish($callback);
	 }

	/**
	 * Register a "shutdown" callback.
	 *
	 * @param callable $callback 
	 * @return void 
	 * @static 
	 */
	 public static function shutdown($callback = null){
		 static::$root->shutdown($callback);
	 }

	/**
	 * Handles the given request and delivers the response.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function run(){
		 static::$root->run();
	 }

	/**
	 * Handle the given request and get the response.
	 *
	 * @param \Illuminate\Http\Request $request 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function dispatch($request){
		return static::$root->dispatch($request);
	 }

	/**
	 * Handle the given request and get the response.
	 * 
	 * Provides compatibility with BrowserKit functional testing.
	 *
	 * @implements HttpKernelInterface::handle
	 * @param \Illuminate\Http\Request $request 
	 * @param int $type 
	 * @param bool $catch 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function handle($request, $type = 1, $catch = true){
		return static::$root->handle($request, $type, $catch);
	 }

	/**
	 * Boot the application's service providers.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function boot(){
		 static::$root->boot();
	 }

	/**
	 * Register a new boot listener.
	 *
	 * @param mixed $callback 
	 * @return void 
	 * @static 
	 */
	 public static function booting($callback){
		 static::$root->booting($callback);
	 }

	/**
	 * Register a new "booted" listener.
	 *
	 * @param mixed $callback 
	 * @return void 
	 * @static 
	 */
	 public static function booted($callback){
		 static::$root->booted($callback);
	 }

	/**
	 * Prepare the request by injecting any services.
	 *
	 * @param \Illuminate\Http\Request $request 
	 * @return \Illuminate\Http\Request 
	 * @static 
	 */
	 public static function prepareRequest($request){
		return static::$root->prepareRequest($request);
	 }

	/**
	 * Prepare the given value as a Response object.
	 *
	 * @param mixed $value 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function prepareResponse($value){
		return static::$root->prepareResponse($value);
	 }

	/**
	 * Determine if the application is currently down for maintenance.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function isDownForMaintenance(){
		return static::$root->isDownForMaintenance();
	 }

	/**
	 * Register a maintenance mode event listener.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function down($callback){
		 static::$root->down($callback);
	 }

	/**
	 * Throw an HttpException with the given data.
	 *
	 * @param int $code 
	 * @param string $message 
	 * @param array $headers 
	 * @return void 
	 * @static 
	 */
	 public static function abort($code, $message = '', $headers = array()){
		 static::$root->abort($code, $message, $headers);
	 }

	/**
	 * Register a 404 error handler.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function missing($callback){
		 static::$root->missing($callback);
	 }

	/**
	 * Register an application error handler.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function error($callback){
		 static::$root->error($callback);
	 }

	/**
	 * Register an error handler for fatal errors.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function fatal($callback){
		 static::$root->fatal($callback);
	 }

	/**
	 * Get the configuration loader instance.
	 *
	 * @return \Illuminate\Config\LoaderInterface 
	 * @static 
	 */
	 public static function getConfigLoader(){
		return static::$root->getConfigLoader();
	 }

	/**
	 * Get the service provider repository instance.
	 *
	 * @return \Illuminate\Foundation\ProviderRepository 
	 * @static 
	 */
	 public static function getProviderRepository(){
		return static::$root->getProviderRepository();
	 }

	/**
	 * Set the current application locale.
	 *
	 * @param string $locale 
	 * @return void 
	 * @static 
	 */
	 public static function setLocale($locale){
		 static::$root->setLocale($locale);
	 }

	/**
	 * Get the service providers that have been loaded.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getLoadedProviders(){
		return static::$root->getLoadedProviders();
	 }

	/**
	 * Set the application's deferred services.
	 *
	 * @param array $services 
	 * @return void 
	 * @static 
	 */
	 public static function setDeferredServices($services){
		 static::$root->setDeferredServices($services);
	 }

	/**
	 * Dynamically access application services.
	 *
	 * @param string $key 
	 * @return mixed 
	 * @static 
	 */
	 public static function __get($key){
		return static::$root->__get($key);
	 }

	/**
	 * Dynamically set application services.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function __set($key, $value){
		 static::$root->__set($key, $value);
	 }

	/**
	 * Determine if the given abstract type has been bound.
	 *
	 * @param string $abstract 
	 * @return bool 
	 * @static 
	 */
	 public static function bound($abstract){
		return static::$root->bound($abstract);
	 }

	/**
	 * Register a binding with the container.
	 *
	 * @param string $abstract 
	 * @param \Closure|string|null $concrete 
	 * @param bool $shared 
	 * @return void 
	 * @static 
	 */
	 public static function bind($abstract, $concrete = null, $shared = false){
		 static::$root->bind($abstract, $concrete, $shared);
	 }

	/**
	 * Register a binding if it hasn't already been registered.
	 *
	 * @param string $abstract 
	 * @param \Closure|string|null $concrete 
	 * @param bool $shared 
	 * @return bool 
	 * @static 
	 */
	 public static function bindIf($abstract, $concrete = null, $shared = false){
		return static::$root->bindIf($abstract, $concrete, $shared);
	 }

	/**
	 * Register a shared binding in the container.
	 *
	 * @param string $abstract 
	 * @param \Closure|string|null $concrete 
	 * @return void 
	 * @static 
	 */
	 public static function singleton($abstract, $concrete = null){
		 static::$root->singleton($abstract, $concrete);
	 }

	/**
	 * Wrap a Closure such that it is shared.
	 *
	 * @param \Closure $closure 
	 * @return \Illuminate\Container\Closure 
	 * @static 
	 */
	 public static function share($closure){
		return static::$root->share($closure);
	 }

	/**
	 * "Extend" an abstract type in the container.
	 *
	 * @param string $abstract 
	 * @param \Closure $closure 
	 * @return void 
	 * @static 
	 */
	 public static function extend($abstract, $closure){
		 static::$root->extend($abstract, $closure);
	 }

	/**
	 * Register an existing instance as shared in the container.
	 *
	 * @param string $abstract 
	 * @param mixed $instance 
	 * @return void 
	 * @static 
	 */
	 public static function instance($abstract, $instance){
		 static::$root->instance($abstract, $instance);
	 }

	/**
	 * Alias a type to a shorter name.
	 *
	 * @param string $abstract 
	 * @param string $alias 
	 * @return void 
	 * @static 
	 */
	 public static function alias($abstract, $alias){
		 static::$root->alias($abstract, $alias);
	 }

	/**
	 * Instantiate a concrete instance of the given type.
	 *
	 * @param string $concrete 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function build($concrete, $parameters = array()){
		return static::$root->build($concrete, $parameters);
	 }

	/**
	 * Register a new resolving callback.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function resolving($callback){
		 static::$root->resolving($callback);
	 }

	/**
	 * Get the container's bindings.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getBindings(){
		return static::$root->getBindings();
	 }

	/**
	 * Determine if a given offset exists.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function offsetExists($key){
		return static::$root->offsetExists($key);
	 }

	/**
	 * Get the value at a given offset.
	 *
	 * @param string $key 
	 * @return mixed 
	 * @static 
	 */
	 public static function offsetGet($key){
		return static::$root->offsetGet($key);
	 }

	/**
	 * Set the value at a given offset.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function offsetSet($key, $value){
		 static::$root->offsetSet($key, $value);
	 }

	/**
	 * Unset the value at a given offset.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function offsetUnset($key){
		 static::$root->offsetUnset($key);
	 }

 }
}

namespace  {
 class Artisan extends Illuminate\Support\Facades\Artisan{
	/**
	 * @var \Illuminate\Console\Application $root
	 */
	 static private $root;

	/**
	 * Start a new Console application.
	 *
	 * @param \Illuminate\Foundation\Application $app 
	 * @return \Illuminate\Console\Application 
	 * @static 
	 */
	 public static function start($app){
		return static::$root->start($app);
	 }

	/**
	 * Add a command to the console.
	 *
	 * @param \Symfony\Component\Console\Command\Command $command 
	 * @return \Symfony\Component\Console\Command\Command 
	 * @static 
	 */
	 public static function add($command){
		return static::$root->add($command);
	 }

	/**
	 * Add a command, resolving through the application.
	 *
	 * @param string $command 
	 * @return void 
	 * @static 
	 */
	 public static function resolve($command){
		 static::$root->resolve($command);
	 }

	/**
	 * Resolve an array of commands through the application.
	 *
	 * @param array|\Illuminate\Console\dynamic $commands 
	 * @return void 
	 * @static 
	 */
	 public static function resolveCommands($commands){
		 static::$root->resolveCommands($commands);
	 }

	/**
	 * Render the given exception.
	 *
	 * @param \Illuminate\Console\Exception $e 
	 * @param \Symfony\Component\Console\Output\OutputInterface $output 
	 * @return void 
	 * @static 
	 */
	 public static function renderException($e, $output){
		 static::$root->renderException($e, $output);
	 }

	/**
	 * Set the exception handler instance.
	 *
	 * @param \Illuminate\Exception\Handler $handler 
	 * @return void 
	 * @static 
	 */
	 public static function setExceptionHandler($handler){
		 static::$root->setExceptionHandler($handler);
	 }

	/**
	 * Set the Laravel application instance.
	 *
	 * @param \Illuminate\Foundation\Application $laravel 
	 * @return void 
	 * @static 
	 */
	 public static function setLaravel($laravel){
		 static::$root->setLaravel($laravel);
	 }

	/**
	 * Constructor.
	 *
	 * @param string $name The name of the application
	 * @param string $version The version of the application
	 * @api 
	 * @static 
	 */
	 public static function __construct($name = 'UNKNOWN', $version = 'UNKNOWN'){
		 static::$root->__construct($name, $version);
	 }

	/**
	 * 
	 *
	 * @static 
	 */
	 public static function setDispatcher($dispatcher){
		 static::$root->setDispatcher($dispatcher);
	 }

	/**
	 * Runs the current application.
	 *
	 * @param \Symfony\Component\Console\InputInterface $input An Input instance
	 * @param \Symfony\Component\Console\OutputInterface $output An Output instance
	 * @return integer 0 if everything went fine, or an error code
	 * @throws \Exception When doRun returns Exception
	 * @api 
	 * @static 
	 */
	 public static function run($input = null, $output = null){
		return static::$root->run($input, $output);
	 }

	/**
	 * Runs the current application.
	 *
	 * @param \Symfony\Component\Console\InputInterface $input An Input instance
	 * @param \Symfony\Component\Console\OutputInterface $output An Output instance
	 * @return integer 0 if everything went fine, or an error code
	 * @static 
	 */
	 public static function doRun($input, $output){
		return static::$root->doRun($input, $output);
	 }

	/**
	 * Set a helper set to be used with the command.
	 *
	 * @param \Symfony\Component\Console\HelperSet $helperSet The helper set
	 * @api 
	 * @static 
	 */
	 public static function setHelperSet($helperSet){
		 static::$root->setHelperSet($helperSet);
	 }

	/**
	 * Get the helper set associated with the command.
	 *
	 * @return \Symfony\Component\Console\HelperSet The HelperSet instance associated with this command
	 * @api 
	 * @static 
	 */
	 public static function getHelperSet(){
		return static::$root->getHelperSet();
	 }

	/**
	 * Set an input definition set to be used with this application
	 *
	 * @param \Symfony\Component\Console\InputDefinition $definition The input definition
	 * @api 
	 * @static 
	 */
	 public static function setDefinition($definition){
		 static::$root->setDefinition($definition);
	 }

	/**
	 * Gets the InputDefinition related to this Application.
	 *
	 * @return \Symfony\Component\Console\InputDefinition The InputDefinition instance
	 * @static 
	 */
	 public static function getDefinition(){
		return static::$root->getDefinition();
	 }

	/**
	 * Gets the help message.
	 *
	 * @return string A help message.
	 * @static 
	 */
	 public static function getHelp(){
		return static::$root->getHelp();
	 }

	/**
	 * Sets whether to catch exceptions or not during commands execution.
	 *
	 * @param Boolean $boolean Whether to catch exceptions or not during commands execution
	 * @api 
	 * @static 
	 */
	 public static function setCatchExceptions($boolean){
		 static::$root->setCatchExceptions($boolean);
	 }

	/**
	 * Sets whether to automatically exit after a command execution or not.
	 *
	 * @param Boolean $boolean Whether to automatically exit after a command execution or not
	 * @api 
	 * @static 
	 */
	 public static function setAutoExit($boolean){
		 static::$root->setAutoExit($boolean);
	 }

	/**
	 * Gets the name of the application.
	 *
	 * @return string The application name
	 * @api 
	 * @static 
	 */
	 public static function getName(){
		return static::$root->getName();
	 }

	/**
	 * Sets the application name.
	 *
	 * @param string $name The application name
	 * @api 
	 * @static 
	 */
	 public static function setName($name){
		 static::$root->setName($name);
	 }

	/**
	 * Gets the application version.
	 *
	 * @return string The application version
	 * @api 
	 * @static 
	 */
	 public static function getVersion(){
		return static::$root->getVersion();
	 }

	/**
	 * Sets the application version.
	 *
	 * @param string $version The application version
	 * @api 
	 * @static 
	 */
	 public static function setVersion($version){
		 static::$root->setVersion($version);
	 }

	/**
	 * Returns the long version of the application.
	 *
	 * @return string The long application version
	 * @api 
	 * @static 
	 */
	 public static function getLongVersion(){
		return static::$root->getLongVersion();
	 }

	/**
	 * Registers a new command.
	 *
	 * @param string $name The command name
	 * @return \Symfony\Component\Console\Command The newly created command
	 * @api 
	 * @static 
	 */
	 public static function register($name){
		return static::$root->register($name);
	 }

	/**
	 * Adds an array of command objects.
	 *
	 * @param \Symfony\Component\Console\Command[] $commands An array of commands
	 * @api 
	 * @static 
	 */
	 public static function addCommands($commands){
		 static::$root->addCommands($commands);
	 }

	/**
	 * Returns a registered command by name or alias.
	 *
	 * @param string $name The command name or alias
	 * @return \Symfony\Component\Console\Command A Command object
	 * @throws \InvalidArgumentException When command name given does not exist
	 * @api 
	 * @static 
	 */
	 public static function get($name){
		return static::$root->get($name);
	 }

	/**
	 * Returns true if the command exists, false otherwise.
	 *
	 * @param string $name The command name or alias
	 * @return Boolean true if the command exists, false otherwise
	 * @api 
	 * @static 
	 */
	 public static function has($name){
		return static::$root->has($name);
	 }

	/**
	 * Returns an array of all unique namespaces used by currently registered commands.
	 * 
	 * It does not returns the global namespace which always exists.
	 *
	 * @return array An array of namespaces
	 * @static 
	 */
	 public static function getNamespaces(){
		return static::$root->getNamespaces();
	 }

	/**
	 * Finds a registered namespace by a name or an abbreviation.
	 *
	 * @param string $namespace A namespace or abbreviation to search for
	 * @return string A registered namespace
	 * @throws \InvalidArgumentException When namespace is incorrect or ambiguous
	 * @static 
	 */
	 public static function findNamespace($namespace){
		return static::$root->findNamespace($namespace);
	 }

	/**
	 * Finds a command by name or alias.
	 * 
	 * Contrary to get, this command tries to find the best
	 * match if you give it an abbreviation of a name or alias.
	 *
	 * @param string $name A command name or a command alias
	 * @return \Symfony\Component\Console\Command A Command instance
	 * @throws \InvalidArgumentException When command name is incorrect or ambiguous
	 * @api 
	 * @static 
	 */
	 public static function find($name){
		return static::$root->find($name);
	 }

	/**
	 * Gets the commands (registered in the given namespace if provided).
	 * 
	 * The array keys are the full names and the values the command instances.
	 *
	 * @param string $namespace A namespace name
	 * @return \Symfony\Component\Console\Command[] An array of Command instances
	 * @api 
	 * @static 
	 */
	 public static function all($namespace = null){
		return static::$root->all($namespace);
	 }

	/**
	 * Returns an array of possible abbreviations given a set of names.
	 *
	 * @param array $names An array of names
	 * @return array An array of abbreviations
	 * @static 
	 */
	 public static function getAbbreviations($names){
		return static::$root->getAbbreviations($names);
	 }

	/**
	 * Returns a text representation of the Application.
	 *
	 * @param string $namespace An optional namespace name
	 * @param boolean $raw Whether to return raw command list
	 * @return string A string representing the Application
	 * @deprecated Deprecated since version 2.3, to be removed in 3.0.
	 * @static 
	 */
	 public static function asText($namespace = null, $raw = false){
		return static::$root->asText($namespace, $raw);
	 }

	/**
	 * Returns an XML representation of the Application.
	 *
	 * @param string $namespace An optional namespace name
	 * @param Boolean $asDom Whether to return a DOM or an XML string
	 * @return string|\DOMDocument An XML string representing the Application
	 * @deprecated Deprecated since version 2.3, to be removed in 3.0.
	 * @static 
	 */
	 public static function asXml($namespace = null, $asDom = false){
		return static::$root->asXml($namespace, $asDom);
	 }

	/**
	 * Tries to figure out the terminal dimensions based on the current environment
	 *
	 * @return array Array containing width and height
	 * @static 
	 */
	 public static function getTerminalDimensions(){
		return static::$root->getTerminalDimensions();
	 }

	/**
	 * Returns the namespace part of the command name.
	 * 
	 * This method is not part of public API and should not be used directly.
	 *
	 * @param string $name The full name of the command
	 * @param string $limit The maximum number of parts of the namespace
	 * @return string The namespace of the command
	 * @static 
	 */
	 public static function extractNamespace($name, $limit = null){
		return static::$root->extractNamespace($name, $limit);
	 }

 }
}

namespace  {
 class Auth extends Illuminate\Support\Facades\Auth{
	/**
	 * @var \Illuminate\Auth\AuthManager $root
	 */
	 static private $root;

	/**
	 * Create an instance of the Eloquent driver.
	 *
	 * @return \Illuminate\Auth\Guard 
	 * @static 
	 */
	 public static function createEloquentDriver(){
		return static::$root->createEloquentDriver();
	 }

	/**
	 * Create a new manager instance.
	 *
	 * @param \Illuminate\Foundation\Application $app 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($app){
		 static::$root->__construct($app);
	 }

	/**
	 * Get a driver instance.
	 *
	 * @param string $driver 
	 * @return mixed 
	 * @static 
	 */
	 public static function driver($driver = null){
		return static::$root->driver($driver);
	 }

	/**
	 * Register a custom driver creator Closure.
	 *
	 * @param string $driver 
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function extend($driver, $callback){
		 static::$root->extend($driver, $callback);
	 }

	/**
	 * Get all of the created "drivers".
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getDrivers(){
		return static::$root->getDrivers();
	 }

	/**
	 * Dynamically call the default driver instance.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

	/**
	 * @var \Illuminate\Auth\Guard $root2
	 */
	 static private $root2;

	/**
	 * Determine if the current user is authenticated.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function check(){
		return static::$root2->check();
	 }

	/**
	 * Determine if the current user is a guest.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function guest(){
		return static::$root2->guest();
	 }

	/**
	 * Get the currently authenticated user.
	 *
	 * @return \Illuminate\Auth\UserInterface|null 
	 * @static 
	 */
	 public static function user(){
		return static::$root2->user();
	 }

	/**
	 * Log a user into the application without sessions or cookies.
	 *
	 * @param array $credentials 
	 * @return bool 
	 * @static 
	 */
	 public static function once($credentials = array()){
		return static::$root2->once($credentials);
	 }

	/**
	 * Validate a user's credentials.
	 *
	 * @param array $credentials 
	 * @return bool 
	 * @static 
	 */
	 public static function validate($credentials = array()){
		return static::$root2->validate($credentials);
	 }

	/**
	 * Attempt to authenticate using HTTP Basic Auth.
	 *
	 * @param string $field 
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @return \Symfony\Component\HttpFoundation\Response|null 
	 * @static 
	 */
	 public static function basic($field = 'email', $request = null){
		return static::$root2->basic($field, $request);
	 }

	/**
	 * Perform a stateless HTTP Basic login attempt.
	 *
	 * @param string $field 
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @return \Symfony\Component\HttpFoundation\Response|null 
	 * @static 
	 */
	 public static function onceBasic($field = 'email', $request = null){
		return static::$root2->onceBasic($field, $request);
	 }

	/**
	 * Attempt to authenticate a user using the given credentials.
	 *
	 * @param array $credentials 
	 * @param bool $remember 
	 * @param bool $login 
	 * @return bool 
	 * @static 
	 */
	 public static function attempt($credentials = array(), $remember = false, $login = true){
		return static::$root2->attempt($credentials, $remember, $login);
	 }

	/**
	 * Register an authentication attempt event listener.
	 *
	 * @param mixed $callback 
	 * @return void 
	 * @static 
	 */
	 public static function attempting($callback){
		 static::$root2->attempting($callback);
	 }

	/**
	 * Log a user into the application.
	 *
	 * @param \Illuminate\Auth\UserInterface $user 
	 * @param bool $remember 
	 * @return void 
	 * @static 
	 */
	 public static function login($user, $remember = false){
		 static::$root2->login($user, $remember);
	 }

	/**
	 * Log the given user ID into the application.
	 *
	 * @param mixed $id 
	 * @param bool $remember 
	 * @return \Illuminate\Auth\UserInterface 
	 * @static 
	 */
	 public static function loginUsingId($id, $remember = false){
		return static::$root2->loginUsingId($id, $remember);
	 }

	/**
	 * Log the user out of the application.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function logout(){
		 static::$root2->logout();
	 }

	/**
	 * Get the cookies queued by the guard.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getQueuedCookies(){
		return static::$root2->getQueuedCookies();
	 }

	/**
	 * Get the cookie creator instance used by the guard.
	 *
	 * @return \Illuminate\Cookie\CookieJar 
	 * @static 
	 */
	 public static function getCookieJar(){
		return static::$root2->getCookieJar();
	 }

	/**
	 * Set the cookie creator instance used by the guard.
	 *
	 * @param \Illuminate\Cookie\CookieJar $cookie 
	 * @return void 
	 * @static 
	 */
	 public static function setCookieJar($cookie){
		 static::$root2->setCookieJar($cookie);
	 }

	/**
	 * Get the event dispatcher instance.
	 *
	 * @return \Illuminate\Events\Dispatcher 
	 * @static 
	 */
	 public static function getDispatcher(){
		return static::$root2->getDispatcher();
	 }

	/**
	 * Set the event dispatcher instance.
	 *
	 * @param \Illuminate\Events\Dispatcher  
	 * @static 
	 */
	 public static function setDispatcher($events){
		 static::$root2->setDispatcher($events);
	 }

	/**
	 * Get the session store used by the guard.
	 *
	 * @return \Illuminate\Session\Store 
	 * @static 
	 */
	 public static function getSession(){
		return static::$root2->getSession();
	 }

	/**
	 * Get the user provider used by the guard.
	 *
	 * @return \Illuminate\Auth\UserProviderInterface 
	 * @static 
	 */
	 public static function getProvider(){
		return static::$root2->getProvider();
	 }

	/**
	 * Return the currently cached user of the application.
	 *
	 * @return \Illuminate\Auth\UserInterface|null 
	 * @static 
	 */
	 public static function getUser(){
		return static::$root2->getUser();
	 }

	/**
	 * Set the current user of the application.
	 *
	 * @param \Illuminate\Auth\UserInterface $user 
	 * @return void 
	 * @static 
	 */
	 public static function setUser($user){
		 static::$root2->setUser($user);
	 }

	/**
	 * Get the current request instance.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request 
	 * @static 
	 */
	 public static function getRequest(){
		return static::$root2->getRequest();
	 }

	/**
	 * Set the current request instance.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request  
	 * @return \Illuminate\Auth\Guard 
	 * @static 
	 */
	 public static function setRequest($request){
		return static::$root2->setRequest($request);
	 }

	/**
	 * Get a unique identifier for the auth session value.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getName(){
		return static::$root2->getName();
	 }

	/**
	 * Get the name of the cookie used to store the "recaller".
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getRecallerName(){
		return static::$root2->getRecallerName();
	 }

 }
}

namespace  {
 class Blade extends Illuminate\Support\Facades\Blade{
	/**
	 * @var \Illuminate\View\Compilers\BladeCompiler $root
	 */
	 static private $root;

	/**
	 * Compile the view at the given path.
	 *
	 * @param string $path 
	 * @return void 
	 * @static 
	 */
	 public static function compile($path){
		 static::$root->compile($path);
	 }

	/**
	 * Compile the given Blade template contents.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function compileString($value){
		return static::$root->compileString($value);
	 }

	/**
	 * Register a custom Blade compiler.
	 *
	 * @param \Closure $compiler 
	 * @return void 
	 * @static 
	 */
	 public static function extend($compiler){
		 static::$root->extend($compiler);
	 }

	/**
	 * Get the regular expression for a generic Blade function.
	 *
	 * @param string $function 
	 * @return string 
	 * @static 
	 */
	 public static function createMatcher($function){
		return static::$root->createMatcher($function);
	 }

	/**
	 * Get the regular expression for a generic Blade function.
	 *
	 * @param string $function 
	 * @return string 
	 * @static 
	 */
	 public static function createOpenMatcher($function){
		return static::$root->createOpenMatcher($function);
	 }

	/**
	 * Create a plain Blade matcher.
	 *
	 * @param string $function 
	 * @return string 
	 * @static 
	 */
	 public static function createPlainMatcher($function){
		return static::$root->createPlainMatcher($function);
	 }

	/**
	 * Sets the content tags used for the compiler.
	 *
	 * @param string $openTag 
	 * @param string $closeTag 
	 * @param bool $escaped 
	 * @return void 
	 * @static 
	 */
	 public static function setContentTags($openTag, $closeTag, $escaped = false){
		 static::$root->setContentTags($openTag, $closeTag, $escaped);
	 }

	/**
	 * Sets the escaped content tags used for the compiler.
	 *
	 * @param string $openTag 
	 * @param string $closeTag 
	 * @return void 
	 * @static 
	 */
	 public static function setEscapedContentTags($openTag, $closeTag){
		 static::$root->setEscapedContentTags($openTag, $closeTag);
	 }

	/**
	 * Create a new compiler instance.
	 *
	 * @param \Illuminate\Filesystem\Filesystem $files 
	 * @param string $cachePath 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($files, $cachePath){
		 static::$root->__construct($files, $cachePath);
	 }

	/**
	 * Get the path to the compiled version of a view.
	 *
	 * @param string $path 
	 * @return string 
	 * @static 
	 */
	 public static function getCompiledPath($path){
		return static::$root->getCompiledPath($path);
	 }

	/**
	 * Determine if the view at the given path is expired.
	 *
	 * @param string $path 
	 * @return bool 
	 * @static 
	 */
	 public static function isExpired($path){
		return static::$root->isExpired($path);
	 }

 }
}

namespace  {
 class Cache extends Illuminate\Support\Facades\Cache{
	/**
	 * @var \Illuminate\Cache\CacheManager $root
	 */
	 static private $root;

	/**
	 * Create a new manager instance.
	 *
	 * @param \Illuminate\Foundation\Application $app 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($app){
		 static::$root->__construct($app);
	 }

	/**
	 * Get a driver instance.
	 *
	 * @param string $driver 
	 * @return mixed 
	 * @static 
	 */
	 public static function driver($driver = null){
		return static::$root->driver($driver);
	 }

	/**
	 * Register a custom driver creator Closure.
	 *
	 * @param string $driver 
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function extend($driver, $callback){
		 static::$root->extend($driver, $callback);
	 }

	/**
	 * Get all of the created "drivers".
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getDrivers(){
		return static::$root->getDrivers();
	 }

	/**
	 * Dynamically call the default driver instance.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

	/**
	 * @var \Illuminate\Cache\StoreInterface $root2
	 */
	 static private $root2;

	/**
	 * Retrieve an item from the cache by key.
	 *
	 * @param string $key 
	 * @return mixed 
	 * @static 
	 */
	 public static function get($key){
		return static::$root2->get($key);
	 }

	/**
	 * Store an item in the cache for a given number of minutes.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @param int $minutes 
	 * @return void 
	 * @static 
	 */
	 public static function put($key, $value, $minutes){
		 static::$root2->put($key, $value, $minutes);
	 }

	/**
	 * Increment the value of an item in the cache.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function increment($key, $value = 1){
		 static::$root2->increment($key, $value);
	 }

	/**
	 * Decrement the value of an item in the cache.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function decrement($key, $value = 1){
		 static::$root2->decrement($key, $value);
	 }

	/**
	 * Store an item in the cache indefinitely.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function forever($key, $value){
		 static::$root2->forever($key, $value);
	 }

	/**
	 * Remove an item from the cache.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function forget($key){
		 static::$root2->forget($key);
	 }

	/**
	 * Remove all items from the cache.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flush(){
		 static::$root2->flush();
	 }

	/**
	 * Get the cache key prefix.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getPrefix(){
		return static::$root2->getPrefix();
	 }

	/**
	 * @var \Illuminate\Cache\Repository $root3
	 */
	 static private $root3;

	/**
	 * Determine if an item exists in the cache.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function has($key){
		return static::$root3->has($key);
	 }

	/**
	 * Store an item in the cache if the key does not exist.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @param int $minutes 
	 * @return void 
	 * @static 
	 */
	 public static function add($key, $value, $minutes){
		 static::$root3->add($key, $value, $minutes);
	 }

	/**
	 * Get an item from the cache, or store the default value.
	 *
	 * @param string $key 
	 * @param int $minutes 
	 * @param \Closure $callback 
	 * @return mixed 
	 * @static 
	 */
	 public static function remember($key, $minutes, $callback){
		return static::$root3->remember($key, $minutes, $callback);
	 }

	/**
	 * Get an item from the cache, or store the default value forever.
	 *
	 * @param string $key 
	 * @param \Closure $callback 
	 * @return mixed 
	 * @static 
	 */
	 public static function sear($key, $callback){
		return static::$root3->sear($key, $callback);
	 }

	/**
	 * Get an item from the cache, or store the default value forever.
	 *
	 * @param string $key 
	 * @param \Closure $callback 
	 * @return mixed 
	 * @static 
	 */
	 public static function rememberForever($key, $callback){
		return static::$root3->rememberForever($key, $callback);
	 }

	/**
	 * Get the default cache time.
	 *
	 * @return int 
	 * @static 
	 */
	 public static function getDefaultCacheTime(){
		return static::$root3->getDefaultCacheTime();
	 }

	/**
	 * Set the default cache time in minutes.
	 *
	 * @param int $minutes 
	 * @return void 
	 * @static 
	 */
	 public static function setDefaultCacheTime($minutes){
		 static::$root3->setDefaultCacheTime($minutes);
	 }

	/**
	 * Get the cache store implementation.
	 *
	 * @return \Illuminate\Cache\StoreInterface 
	 * @static 
	 */
	 public static function getStore(){
		return static::$root3->getStore();
	 }

	/**
	 * Determine if a cached value exists.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function offsetExists($key){
		return static::$root3->offsetExists($key);
	 }

	/**
	 * Retrieve an item from the cache by key.
	 *
	 * @param string $key 
	 * @return mixed 
	 * @static 
	 */
	 public static function offsetGet($key){
		return static::$root3->offsetGet($key);
	 }

	/**
	 * Store an item in the cache for the default time.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function offsetSet($key, $value){
		 static::$root3->offsetSet($key, $value);
	 }

	/**
	 * Remove an item from the cache.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function offsetUnset($key){
		 static::$root3->offsetUnset($key);
	 }

 }
}

namespace  {
 class ClassLoader{
	/**
	 * @var \Illuminate\Support\ClassLoader $root
	 */
	 static private $root;

	/**
	 * Load the given class file.
	 *
	 * @param string $class 
	 * @return void 
	 * @static 
	 */
	 public static function load($class){
		 static::$root->load($class);
	 }

	/**
	 * Get the normal file name for a class.
	 *
	 * @param string $class 
	 * @return string 
	 * @static 
	 */
	 public static function normalizeClass($class){
		return static::$root->normalizeClass($class);
	 }

	/**
	 * Register the given class loader on the auto-loader stack.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function register(){
		 static::$root->register();
	 }

	/**
	 * Add directories to the class loader.
	 *
	 * @param string|array $directories 
	 * @return void 
	 * @static 
	 */
	 public static function addDirectories($directories){
		 static::$root->addDirectories($directories);
	 }

	/**
	 * Remove directories from the class loader.
	 *
	 * @param string|array $directories 
	 * @return void 
	 * @static 
	 */
	 public static function removeDirectories($directories = null){
		 static::$root->removeDirectories($directories);
	 }

	/**
	 * Gets all the directories registered with the loader.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getDirectories(){
		return static::$root->getDirectories();
	 }

 }
}

namespace  {
 class Config extends Illuminate\Support\Facades\Config{
	/**
	 * @var \Illuminate\Config\Repository $root
	 */
	 static private $root;

	/**
	 * Create a new configuration repository.
	 *
	 * @param \Illuminate\Config\LoaderInterface $loader 
	 * @param string $environment 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($loader, $environment){
		 static::$root->__construct($loader, $environment);
	 }

	/**
	 * Determine if the given configuration value exists.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function has($key){
		return static::$root->has($key);
	 }

	/**
	 * Determine if a configuration group exists.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasGroup($key){
		return static::$root->hasGroup($key);
	 }

	/**
	 * Get the specified configuration value.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function get($key, $default = null){
		return static::$root->get($key, $default);
	 }

	/**
	 * Set a given configuration value.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function set($key, $value){
		 static::$root->set($key, $value);
	 }

	/**
	 * Register a package for cascading configuration.
	 *
	 * @param string $package 
	 * @param string $hint 
	 * @param string $namespace 
	 * @return void 
	 * @static 
	 */
	 public static function package($package, $hint, $namespace = null){
		 static::$root->package($package, $hint, $namespace);
	 }

	/**
	 * Register an after load callback for a given namespace.
	 *
	 * @param string $namespace 
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function afterLoading($namespace, $callback){
		 static::$root->afterLoading($namespace, $callback);
	 }

	/**
	 * Add a new namespace to the loader.
	 *
	 * @param string $namespace 
	 * @param string $hint 
	 * @return void 
	 * @static 
	 */
	 public static function addNamespace($namespace, $hint){
		 static::$root->addNamespace($namespace, $hint);
	 }

	/**
	 * Returns all registered namespaces with the config
	 * loader.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getNamespaces(){
		return static::$root->getNamespaces();
	 }

	/**
	 * Get the loader implementation.
	 *
	 * @return \Illuminate\Config\LoaderInterface 
	 * @static 
	 */
	 public static function getLoader(){
		return static::$root->getLoader();
	 }

	/**
	 * Set the loader implementation.
	 *
	 * @param \Illuminate\Config\LoaderInterface $loader 
	 * @return void 
	 * @static 
	 */
	 public static function setLoader($loader){
		 static::$root->setLoader($loader);
	 }

	/**
	 * Get the current configuration environment.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getEnvironment(){
		return static::$root->getEnvironment();
	 }

	/**
	 * Get the after load callback array.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getAfterLoadCallbacks(){
		return static::$root->getAfterLoadCallbacks();
	 }

	/**
	 * Get all of the configuration items.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getItems(){
		return static::$root->getItems();
	 }

	/**
	 * Determine if the given configuration option exists.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function offsetExists($key){
		return static::$root->offsetExists($key);
	 }

	/**
	 * Get a configuration option.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function offsetGet($key){
		return static::$root->offsetGet($key);
	 }

	/**
	 * Set a configuration option.
	 *
	 * @param string $key 
	 * @param string $value 
	 * @return void 
	 * @static 
	 */
	 public static function offsetSet($key, $value){
		 static::$root->offsetSet($key, $value);
	 }

	/**
	 * Unset a configuration option.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function offsetUnset($key){
		 static::$root->offsetUnset($key);
	 }

	/**
	 * Parse a key into namespace, group, and item.
	 *
	 * @param string $key 
	 * @return array 
	 * @static 
	 */
	 public static function parseKey($key){
		return static::$root->parseKey($key);
	 }

	/**
	 * Set the parsed value of a key.
	 *
	 * @param string $key 
	 * @param array $parsed 
	 * @return void 
	 * @static 
	 */
	 public static function setParsedKey($key, $parsed){
		 static::$root->setParsedKey($key, $parsed);
	 }

 }
}

namespace  {
 class Controller{
	/**
	 * @var \Illuminate\Routing\Controllers\Controller $root
	 */
	 static private $root;

	/**
	 * Register a new "before" filter on the controller.
	 *
	 * @param string $filter 
	 * @param array $options 
	 * @return void 
	 * @static 
	 */
	 public static function beforeFilter($filter, $options = array()){
		 static::$root->beforeFilter($filter, $options);
	 }

	/**
	 * Register a new "after" filter on the controller.
	 *
	 * @param string $filter 
	 * @param array $options 
	 * @return void 
	 * @static 
	 */
	 public static function afterFilter($filter, $options = array()){
		 static::$root->afterFilter($filter, $options);
	 }

	/**
	 * Execute an action on the controller.
	 *
	 * @param \Illuminate\Container\Container $container 
	 * @param \Illuminate\Routing\Router $router 
	 * @param string $method 
	 * @param array $parameters 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function callAction($container, $router, $method, $parameters){
		return static::$root->callAction($container, $router, $method, $parameters);
	 }

	/**
	 * Get the code registered filters.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getControllerFilters(){
		return static::$root->getControllerFilters();
	 }

	/**
	 * Handle calls to missing methods on the controller.
	 *
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function missingMethod($parameters){
		return static::$root->missingMethod($parameters);
	 }

	/**
	 * Handle calls to missing methods on the controller.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

 }
}

namespace  {
 class Cookie extends Illuminate\Support\Facades\Cookie{
	/**
	 * @var \Illuminate\Cookie\CookieJar $root
	 */
	 static private $root;

	/**
	 * Create a new cookie manager instance.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @param \Illuminate\Encryption\Encrypter $encrypter 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($request, $encrypter){
		 static::$root->__construct($request, $encrypter);
	 }

	/**
	 * Determine if a cookie exists and is not null.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function has($key){
		return static::$root->has($key);
	 }

	/**
	 * Get the value of the given cookie.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function get($key, $default = null){
		return static::$root->get($key, $default);
	 }

	/**
	 * Create a new cookie instance.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param int $minutes 
	 * @param string $path 
	 * @param string $domain 
	 * @param bool $secure 
	 * @param bool $httpOnly 
	 * @return \Symfony\Component\HttpFoundation\Cookie 
	 * @static 
	 */
	 public static function make($name, $value, $minutes = 0, $path = null, $domain = null, $secure = false, $httpOnly = true){
		return static::$root->make($name, $value, $minutes, $path, $domain, $secure, $httpOnly);
	 }

	/**
	 * Create a cookie that lasts "forever" (five years).
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param string $path 
	 * @param string $domain 
	 * @param bool $secure 
	 * @param bool $httpOnly 
	 * @return \Symfony\Component\HttpFoundation\Cookie 
	 * @static 
	 */
	 public static function forever($name, $value, $path = null, $domain = null, $secure = false, $httpOnly = true){
		return static::$root->forever($name, $value, $path, $domain, $secure, $httpOnly);
	 }

	/**
	 * Expire the given cookie.
	 *
	 * @param string $name 
	 * @return \Symfony\Component\HttpFoundation\Cookie 
	 * @static 
	 */
	 public static function forget($name){
		return static::$root->forget($name);
	 }

	/**
	 * Set the default path and domain for the jar.
	 *
	 * @param string $path 
	 * @param string $domain 
	 * @return void 
	 * @static 
	 */
	 public static function setDefaultPathAndDomain($path, $domain){
		 static::$root->setDefaultPathAndDomain($path, $domain);
	 }

	/**
	 * Get the request instance.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request 
	 * @static 
	 */
	 public static function getRequest(){
		return static::$root->getRequest();
	 }

	/**
	 * Get the encrypter instance.
	 *
	 * @return \Illuminate\Encryption\Encrypter 
	 * @static 
	 */
	 public static function getEncrypter(){
		return static::$root->getEncrypter();
	 }

 }
}

namespace  {
 class Crypt extends Illuminate\Support\Facades\Crypt{
	/**
	 * @var \Illuminate\Encryption\Encrypter $root
	 */
	 static private $root;

	/**
	 * Create a new encrypter instance.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($key){
		 static::$root->__construct($key);
	 }

	/**
	 * Encrypt the given value.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function encrypt($value){
		return static::$root->encrypt($value);
	 }

	/**
	 * Decrypt the given value.
	 *
	 * @param string $payload 
	 * @return string 
	 * @static 
	 */
	 public static function decrypt($payload){
		return static::$root->decrypt($payload);
	 }

	/**
	 * Set the encryption key.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function setKey($key){
		 static::$root->setKey($key);
	 }

	/**
	 * Set the encryption cipher.
	 *
	 * @param string $cipher 
	 * @return void 
	 * @static 
	 */
	 public static function setCipher($cipher){
		 static::$root->setCipher($cipher);
	 }

	/**
	 * Set the encryption mode.
	 *
	 * @param string $mode 
	 * @return void 
	 * @static 
	 */
	 public static function setMode($mode){
		 static::$root->setMode($mode);
	 }

 }
}

namespace  {
 class DB extends Illuminate\Support\Facades\DB{
	/**
	 * @var \Illuminate\Database\DatabaseManager $root
	 */
	 static private $root;

	/**
	 * Create a new database manager instance.
	 *
	 * @param \Illuminate\Foundation\Application $app 
	 * @param \Illuminate\Database\Connectors\ConnectionFactory $factory 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($app, $factory){
		 static::$root->__construct($app, $factory);
	 }

	/**
	 * Get a database connection instance.
	 *
	 * @param string $name 
	 * @return \Illuminate\Database\Connection 
	 * @static 
	 */
	 public static function connection($name = null){
		return static::$root->connection($name);
	 }

	/**
	 * Reconnect to the given database.
	 *
	 * @param string $name 
	 * @return \Illuminate\Database\Connection 
	 * @static 
	 */
	 public static function reconnect($name = null){
		return static::$root->reconnect($name);
	 }

	/**
	 * Get the default connection name.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getDefaultConnection(){
		return static::$root->getDefaultConnection();
	 }

	/**
	 * Set the default connection name.
	 *
	 * @param string $name 
	 * @return void 
	 * @static 
	 */
	 public static function setDefaultConnection($name){
		 static::$root->setDefaultConnection($name);
	 }

	/**
	 * Register an extension connection resolver.
	 *
	 * @param string $name 
	 * @param callable $resolver 
	 * @return void 
	 * @static 
	 */
	 public static function extend($name, $resolver){
		 static::$root->extend($name, $resolver);
	 }

	/**
	 * Dynamically pass methods to the default connection.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

	/**
	 * @var \Illuminate\Database\Connection $root2
	 */
	 static private $root2;

	/**
	 * Set the query grammar to the default implementation.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function useDefaultQueryGrammar(){
		 static::$root2->useDefaultQueryGrammar();
	 }

	/**
	 * Set the schema grammar to the default implementation.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function useDefaultSchemaGrammar(){
		 static::$root2->useDefaultSchemaGrammar();
	 }

	/**
	 * Set the query post processor to the default implementation.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function useDefaultPostProcessor(){
		 static::$root2->useDefaultPostProcessor();
	 }

	/**
	 * Get a schema builder instance for the connection.
	 *
	 * @return \Illuminate\Database\Schema\Builder 
	 * @static 
	 */
	 public static function getSchemaBuilder(){
		return static::$root2->getSchemaBuilder();
	 }

	/**
	 * Begin a fluent query against a database table.
	 *
	 * @param string $table 
	 * @return \Illuminate\Database\Query\Builder 
	 * @static 
	 */
	 public static function table($table){
		return static::$root2->table($table);
	 }

	/**
	 * Get a new raw query expression.
	 *
	 * @param mixed $value 
	 * @return \Illuminate\Database\Query\Expression 
	 * @static 
	 */
	 public static function raw($value){
		return static::$root2->raw($value);
	 }

	/**
	 * Run a select statement and return a single result.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return mixed 
	 * @static 
	 */
	 public static function selectOne($query, $bindings = array()){
		return static::$root2->selectOne($query, $bindings);
	 }

	/**
	 * Run a select statement against the database.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return array 
	 * @static 
	 */
	 public static function select($query, $bindings = array()){
		return static::$root2->select($query, $bindings);
	 }

	/**
	 * Run an insert statement against the database.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return bool 
	 * @static 
	 */
	 public static function insert($query, $bindings = array()){
		return static::$root2->insert($query, $bindings);
	 }

	/**
	 * Run an update statement against the database.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return int 
	 * @static 
	 */
	 public static function update($query, $bindings = array()){
		return static::$root2->update($query, $bindings);
	 }

	/**
	 * Run a delete statement against the database.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return int 
	 * @static 
	 */
	 public static function delete($query, $bindings = array()){
		return static::$root2->delete($query, $bindings);
	 }

	/**
	 * Execute an SQL statement and return the boolean result.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return bool 
	 * @static 
	 */
	 public static function statement($query, $bindings = array()){
		return static::$root2->statement($query, $bindings);
	 }

	/**
	 * Run an SQL statement and get the number of rows affected.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @return int 
	 * @static 
	 */
	 public static function affectingStatement($query, $bindings = array()){
		return static::$root2->affectingStatement($query, $bindings);
	 }

	/**
	 * Run a raw, unprepared query against the PDO connection.
	 *
	 * @param string $query 
	 * @return bool 
	 * @static 
	 */
	 public static function unprepared($query){
		return static::$root2->unprepared($query);
	 }

	/**
	 * Prepare the query bindings for execution.
	 *
	 * @param array $bindings 
	 * @return array 
	 * @static 
	 */
	 public static function prepareBindings($bindings){
		return static::$root2->prepareBindings($bindings);
	 }

	/**
	 * Execute a Closure within a transaction.
	 *
	 * @param \Closure $callback 
	 * @return mixed 
	 * @static 
	 */
	 public static function transaction($callback){
		return static::$root2->transaction($callback);
	 }

	/**
	 * Execute the given callback in "dry run" mode.
	 *
	 * @param \Closure $callback 
	 * @return array 
	 * @static 
	 */
	 public static function pretend($callback){
		return static::$root2->pretend($callback);
	 }

	/**
	 * Log a query in the connection's query log.
	 *
	 * @param string $query 
	 * @param array $bindings 
	 * @param  $time 
	 * @return void 
	 * @static 
	 */
	 public static function logQuery($query, $bindings, $time = null){
		 static::$root2->logQuery($query, $bindings, $time);
	 }

	/**
	 * Register a database query listener with the connection.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function listen($callback){
		 static::$root2->listen($callback);
	 }

	/**
	 * Get a Doctrine Schema Column instance.
	 *
	 * @param string $table 
	 * @param string $column 
	 * @return \Doctrine\DBAL\Schema\Column 
	 * @static 
	 */
	 public static function getDoctrineColumn($table, $column){
		return static::$root2->getDoctrineColumn($table, $column);
	 }

	/**
	 * Get the Doctrine DBAL schema manager for the connection.
	 *
	 * @return \Doctrine\DBAL\Schema\AbstractSchemaManager 
	 * @static 
	 */
	 public static function getDoctrineSchemaManager(){
		return static::$root2->getDoctrineSchemaManager();
	 }

	/**
	 * Get the Doctrine DBAL database connection instance.
	 *
	 * @return \Doctrine\DBAL\Connection 
	 * @static 
	 */
	 public static function getDoctrineConnection(){
		return static::$root2->getDoctrineConnection();
	 }

	/**
	 * Get the currently used PDO connection.
	 *
	 * @return \Illuminate\Database\PDO 
	 * @static 
	 */
	 public static function getPdo(){
		return static::$root2->getPdo();
	 }

	/**
	 * Get the database connection name.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function getName(){
		return static::$root2->getName();
	 }

	/**
	 * Get an option from the configuration options.
	 *
	 * @param string $option 
	 * @return mixed 
	 * @static 
	 */
	 public static function getConfig($option){
		return static::$root2->getConfig($option);
	 }

	/**
	 * Get the PDO driver name.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getDriverName(){
		return static::$root2->getDriverName();
	 }

	/**
	 * Get the query grammar used by the connection.
	 *
	 * @return \Illuminate\Database\Query\Grammars\Grammar 
	 * @static 
	 */
	 public static function getQueryGrammar(){
		return static::$root2->getQueryGrammar();
	 }

	/**
	 * Set the query grammar used by the connection.
	 *
	 * @param \Illuminate\Database\Query\Grammars\Grammar  
	 * @return void 
	 * @static 
	 */
	 public static function setQueryGrammar($grammar){
		 static::$root2->setQueryGrammar($grammar);
	 }

	/**
	 * Get the schema grammar used by the connection.
	 *
	 * @return \Illuminate\Database\Query\Grammars\Grammar 
	 * @static 
	 */
	 public static function getSchemaGrammar(){
		return static::$root2->getSchemaGrammar();
	 }

	/**
	 * Set the schema grammar used by the connection.
	 *
	 * @param \Illuminate\Database\Schema\Grammars\Grammar  
	 * @return void 
	 * @static 
	 */
	 public static function setSchemaGrammar($grammar){
		 static::$root2->setSchemaGrammar($grammar);
	 }

	/**
	 * Get the query post processor used by the connection.
	 *
	 * @return \Illuminate\Database\Query\Processors\Processor 
	 * @static 
	 */
	 public static function getPostProcessor(){
		return static::$root2->getPostProcessor();
	 }

	/**
	 * Set the query post processor used by the connection.
	 *
	 * @param \Illuminate\Database\Query\Processors\Processor  
	 * @return void 
	 * @static 
	 */
	 public static function setPostProcessor($processor){
		 static::$root2->setPostProcessor($processor);
	 }

	/**
	 * Get the event dispatcher used by the connection.
	 *
	 * @return \Illuminate\Events\Dispatcher 
	 * @static 
	 */
	 public static function getEventDispatcher(){
		return static::$root2->getEventDispatcher();
	 }

	/**
	 * Set the event dispatcher instance on the connection.
	 *
	 * @param \Illuminate\Events\Dispatcher  
	 * @return void 
	 * @static 
	 */
	 public static function setEventDispatcher($events){
		 static::$root2->setEventDispatcher($events);
	 }

	/**
	 * Get the paginator environment instance.
	 *
	 * @return \Illuminate\Pagination\Environment 
	 * @static 
	 */
	 public static function getPaginator(){
		return static::$root2->getPaginator();
	 }

	/**
	 * Set the pagination environment instance.
	 *
	 * @param \Illuminate\Pagination\Environment|\Closure $paginator 
	 * @return void 
	 * @static 
	 */
	 public static function setPaginator($paginator){
		 static::$root2->setPaginator($paginator);
	 }

	/**
	 * Get the cache manager instance.
	 *
	 * @return \Illuminate\Cache\CacheManager 
	 * @static 
	 */
	 public static function getCacheManager(){
		return static::$root2->getCacheManager();
	 }

	/**
	 * Set the cache manager instance on the connection.
	 *
	 * @param \Illuminate\Cache\CacheManager|\Closure $cache 
	 * @return void 
	 * @static 
	 */
	 public static function setCacheManager($cache){
		 static::$root2->setCacheManager($cache);
	 }

	/**
	 * Determine if the connection in a "dry run".
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function pretending(){
		return static::$root2->pretending();
	 }

	/**
	 * Get the default fetch mode for the connection.
	 *
	 * @return int 
	 * @static 
	 */
	 public static function getFetchMode(){
		return static::$root2->getFetchMode();
	 }

	/**
	 * Set the default fetch mode for the connection.
	 *
	 * @param int $fetchMode 
	 * @return int 
	 * @static 
	 */
	 public static function setFetchMode($fetchMode){
		return static::$root2->setFetchMode($fetchMode);
	 }

	/**
	 * Get the connection query log.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getQueryLog(){
		return static::$root2->getQueryLog();
	 }

	/**
	 * Clear the query log.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flushQueryLog(){
		 static::$root2->flushQueryLog();
	 }

	/**
	 * Enable the query log on the connection.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function enableQueryLog(){
		 static::$root2->enableQueryLog();
	 }

	/**
	 * Disable the query log on the connection.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function disableQueryLog(){
		 static::$root2->disableQueryLog();
	 }

	/**
	 * Get the name of the connected database.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getDatabaseName(){
		return static::$root2->getDatabaseName();
	 }

	/**
	 * Set the name of the connected database.
	 *
	 * @param string $database 
	 * @return string 
	 * @static 
	 */
	 public static function setDatabaseName($database){
		return static::$root2->setDatabaseName($database);
	 }

	/**
	 * Get the table prefix for the connection.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getTablePrefix(){
		return static::$root2->getTablePrefix();
	 }

	/**
	 * Set the table prefix in use by the connection.
	 *
	 * @param string $prefix 
	 * @return void 
	 * @static 
	 */
	 public static function setTablePrefix($prefix){
		 static::$root2->setTablePrefix($prefix);
	 }

	/**
	 * Set the table prefix and return the grammar.
	 *
	 * @param \Illuminate\Database\Grammar $grammar 
	 * @return \Illuminate\Database\Grammar 
	 * @static 
	 */
	 public static function withTablePrefix($grammar){
		return static::$root2->withTablePrefix($grammar);
	 }

 }
}

namespace  {
 class Eloquent{
	/**
	 * @var \Illuminate\Database\Eloquent\Model $root
	 */
	 static private $root;

	/**
	 * Create a new Eloquent model instance.
	 *
	 * @param array $attributes 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($attributes = array()){
		 static::$root->__construct($attributes);
	 }

	/**
	 * Register an observer with the Model.
	 *
	 * @param object $class 
	 * @return void 
	 * @static 
	 */
	 public static function observe($class){
		 static::$root->observe($class);
	 }

	/**
	 * Fill the model with an array of attributes.
	 *
	 * @param array $attributes 
	 * @return static 
	 * @static 
	 */
	 public static function fill($attributes){
		return static::$root->fill($attributes);
	 }

	/**
	 * Create a new instance of the given model.
	 *
	 * @param array $attributes 
	 * @param bool $exists 
	 * @return static 
	 * @static 
	 */
	 public static function newInstance($attributes = array(), $exists = false){
		return static::$root->newInstance($attributes, $exists);
	 }

	/**
	 * Create a new model instance that is existing.
	 *
	 * @param array $attributes 
	 * @return static 
	 * @static 
	 */
	 public static function newFromBuilder($attributes = array()){
		return static::$root->newFromBuilder($attributes);
	 }

	/**
	 * Save a new model and return the instance.
	 *
	 * @param array $attributes 
	 * @return static 
	 * @static 
	 */
	 public static function create($attributes){
		return static::$root->create($attributes);
	 }

	/**
	 * Begin querying the model on a given connection.
	 *
	 * @param string $connection 
	 * @return \Illuminate\Database\Eloquent\Builder 
	 * @static 
	 */
	 public static function on($connection){
		return static::$root->on($connection);
	 }

	/**
	 * Get all of the models from the database.
	 *
	 * @param array $columns 
	 * @return \Illuminate\Database\Eloquent\Collection|\Eloquent[]|static[] 
	 * @static 
	 */
	 public static function all($columns = array()){
		return static::$root->all($columns);
	 }

	/**
	 * Find a model by its primary key.
	 *
	 * @param mixed $id 
	 * @param array $columns 
	 * @return static 
	 * @static 
	 */
	 public static function find($id, $columns = array()){
		return static::$root->find($id, $columns);
	 }

	/**
	 * Find a model by its primary key or throw an exception.
	 *
	 * @param mixed $id 
	 * @param array $columns 
	 * @return static 
	 * @static 
	 */
	 public static function findOrFail($id, $columns = array()){
		return static::$root->findOrFail($id, $columns);
	 }

	/**
	 * Eager load relations on the model.
	 *
	 * @param array|string $relations 
	 * @return void 
	 * @static 
	 */
	 public static function load($relations){
		 static::$root->load($relations);
	 }

	/**
	 * Being querying a model with eager loading.
	 *
	 * @param array|string $relations 
	 * @return \Illuminate\Database\Eloquent\Builder 
	 * @static 
	 */
	 public static function with($relations){
		return static::$root->with($relations);
	 }

	/**
	 * Define a one-to-one relationship.
	 *
	 * @param string $related 
	 * @param string $foreignKey 
	 * @return \Illuminate\Database\Eloquent\Relations\HasOne 
	 * @static 
	 */
	 public static function hasOne($related, $foreignKey = null){
		return static::$root->hasOne($related, $foreignKey);
	 }

	/**
	 * Define a polymorphic one-to-one relationship.
	 *
	 * @param string $related 
	 * @param string $name 
	 * @param string $type 
	 * @param string $id 
	 * @return \Illuminate\Database\Eloquent\Relations\MorphOne 
	 * @static 
	 */
	 public static function morphOne($related, $name, $type = null, $id = null){
		return static::$root->morphOne($related, $name, $type, $id);
	 }

	/**
	 * Define an inverse one-to-one or many relationship.
	 *
	 * @param string $related 
	 * @param string $foreignKey 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo 
	 * @static 
	 */
	 public static function belongsTo($related, $foreignKey = null){
		return static::$root->belongsTo($related, $foreignKey);
	 }

	/**
	 * Define an polymorphic, inverse one-to-one or many relationship.
	 *
	 * @param string $name 
	 * @param string $type 
	 * @param string $id 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo 
	 * @static 
	 */
	 public static function morphTo($name = null, $type = null, $id = null){
		return static::$root->morphTo($name, $type, $id);
	 }

	/**
	 * Define a one-to-many relationship.
	 *
	 * @param string $related 
	 * @param string $foreignKey 
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany 
	 * @static 
	 */
	 public static function hasMany($related, $foreignKey = null){
		return static::$root->hasMany($related, $foreignKey);
	 }

	/**
	 * Define a polymorphic one-to-many relationship.
	 *
	 * @param string $related 
	 * @param string $name 
	 * @param string $type 
	 * @param string $id 
	 * @return \Illuminate\Database\Eloquent\Relations\MorphMany 
	 * @static 
	 */
	 public static function morphMany($related, $name, $type = null, $id = null){
		return static::$root->morphMany($related, $name, $type, $id);
	 }

	/**
	 * Define a many-to-many relationship.
	 *
	 * @param string $related 
	 * @param string $table 
	 * @param string $foreignKey 
	 * @param string $otherKey 
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany 
	 * @static 
	 */
	 public static function belongsToMany($related, $table = null, $foreignKey = null, $otherKey = null){
		return static::$root->belongsToMany($related, $table, $foreignKey, $otherKey);
	 }

	/**
	 * Get the joining table name for a many-to-many relation.
	 *
	 * @param string $related 
	 * @return string 
	 * @static 
	 */
	 public static function joiningTable($related){
		return static::$root->joiningTable($related);
	 }

	/**
	 * Destroy the models for the given IDs.
	 *
	 * @param array|int $ids 
	 * @return void 
	 * @static 
	 */
	 public static function destroy($ids){
		 static::$root->destroy($ids);
	 }

	/**
	 * Delete the model from the database.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function delete(){
		 static::$root->delete();
	 }

	/**
	 * Force a hard delete on a soft deleted model.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function forceDelete(){
		 static::$root->forceDelete();
	 }

	/**
	 * Restore a soft-deleted model instance.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function restore(){
		 static::$root->restore();
	 }

	/**
	 * Register a saving model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function saving($callback){
		 static::$root->saving($callback);
	 }

	/**
	 * Register a saved model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function saved($callback){
		 static::$root->saved($callback);
	 }

	/**
	 * Register an updating model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function updating($callback){
		 static::$root->updating($callback);
	 }

	/**
	 * Register an updated model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function updated($callback){
		 static::$root->updated($callback);
	 }

	/**
	 * Register a creating model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function creating($callback){
		 static::$root->creating($callback);
	 }

	/**
	 * Register a created model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function created($callback){
		 static::$root->created($callback);
	 }

	/**
	 * Register a deleting model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function deleting($callback){
		 static::$root->deleting($callback);
	 }

	/**
	 * Register a deleted model event with the dispatcher.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function deleted($callback){
		 static::$root->deleted($callback);
	 }

	/**
	 * Remove all of the event listeners for the model.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flushEventListeners(){
		 static::$root->flushEventListeners();
	 }

	/**
	 * Get the observable event names.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getObservableEvents(){
		return static::$root->getObservableEvents();
	 }

	/**
	 * Update the model in the database.
	 *
	 * @param array $attributes 
	 * @return mixed 
	 * @static 
	 */
	 public static function update($attributes = array()){
		return static::$root->update($attributes);
	 }

	/**
	 * Save the model and all of its relationships.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function push(){
		return static::$root->push();
	 }

	/**
	 * Save the model to the database.
	 *
	 * @param array $options 
	 * @return bool 
	 * @static 
	 */
	 public static function save($options = array()){
		return static::$root->save($options);
	 }

	/**
	 * Touch the owning relations of the model.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function touchOwners(){
		 static::$root->touchOwners();
	 }

	/**
	 * Determine if the model touches a given relation.
	 *
	 * @param string $relation 
	 * @return bool 
	 * @static 
	 */
	 public static function touches($relation){
		return static::$root->touches($relation);
	 }

	/**
	 * Update the model's update timestamp.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function touch(){
		return static::$root->touch();
	 }

	/**
	 * Set the value of the "created at" attribute.
	 *
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function setCreatedAt($value){
		 static::$root->setCreatedAt($value);
	 }

	/**
	 * Set the value of the "updated at" attribute.
	 *
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function setUpdatedAt($value){
		 static::$root->setUpdatedAt($value);
	 }

	/**
	 * Get the name of the "created at" column.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getCreatedAtColumn(){
		return static::$root->getCreatedAtColumn();
	 }

	/**
	 * Get the name of the "updated at" column.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getUpdatedAtColumn(){
		return static::$root->getUpdatedAtColumn();
	 }

	/**
	 * Get the name of the "deleted at" column.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getDeletedAtColumn(){
		return static::$root->getDeletedAtColumn();
	 }

	/**
	 * Get the fully qualified "deleted at" column.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getQualifiedDeletedAtColumn(){
		return static::$root->getQualifiedDeletedAtColumn();
	 }

	/**
	 * Get a fresh timestamp for the model.
	 *
	 * @return mixed 
	 * @static 
	 */
	 public  function freshTimestamp(){
		return static::$root->freshTimestamp();
	 }

	/**
	 * Get a new query builder for the model's table.
	 *
	 * @param bool $excludeDeleted 
	 * @return \Illuminate\Database\Eloquent\Builder 
	 * @static 
	 */
	 public static function newQuery($excludeDeleted = true){
		return static::$root->newQuery($excludeDeleted);
	 }

	/**
	 * Get a new query builder that includes soft deletes.
	 *
	 * @return \Illuminate\Database\Eloquent\Builder 
	 * @static 
	 */
	 public static function newQueryWithDeleted(){
		return static::$root->newQueryWithDeleted();
	 }

	/**
	 * Determine if the model instance has been soft-deleted.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function trashed(){
		return static::$root->trashed();
	 }

	/**
	 * Get a new query builder that includes soft deletes.
	 *
	 * @return \Illuminate\Database\Eloquent\Builder 
	 * @static 
	 */
	 public static function withTrashed(){
		return static::$root->withTrashed();
	 }

	/**
	 * Get a new query builder that only includes soft deletes.
	 *
	 * @return \Illuminate\Database\Eloquent\Builder 
	 * @static 
	 */
	 public static function onlyTrashed(){
		return static::$root->onlyTrashed();
	 }

	/**
	 * Create a new Eloquent Collection instance.
	 *
	 * @param array $models 
	 * @return \Illuminate\Database\Eloquent\Collection 
	 * @static 
	 */
	 public  function newCollection($models = array()){
		return static::$root->newCollection($models);
	 }

	/**
	 * Get the table associated with the model.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getTable(){
		return static::$root->getTable();
	 }

	/**
	 * Set the table associated with the model.
	 *
	 * @param string $table 
	 * @return void 
	 * @static 
	 */
	 public static function setTable($table){
		 static::$root->setTable($table);
	 }

	/**
	 * Get the value of the model's primary key.
	 *
	 * @return mixed 
	 * @static 
	 */
	 public static function getKey(){
		return static::$root->getKey();
	 }

	/**
	 * Get the primary key for the model.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getKeyName(){
		return static::$root->getKeyName();
	 }

	/**
	 * Get the table qualified key name.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getQualifiedKeyName(){
		return static::$root->getQualifiedKeyName();
	 }

	/**
	 * Determine if the model uses timestamps.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function usesTimestamps(){
		return static::$root->usesTimestamps();
	 }

	/**
	 * Determine if the model instance uses soft deletes.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function isSoftDeleting(){
		return static::$root->isSoftDeleting();
	 }

	/**
	 * Set the soft deleting property on the model.
	 *
	 * @param bool $enabled 
	 * @return void 
	 * @static 
	 */
	 public static function setSoftDeleting($enabled){
		 static::$root->setSoftDeleting($enabled);
	 }

	/**
	 * Get the number of models to return per page.
	 *
	 * @return int 
	 * @static 
	 */
	 public static function getPerPage(){
		return static::$root->getPerPage();
	 }

	/**
	 * Set the number of models ot return per page.
	 *
	 * @param int $perPage 
	 * @return void 
	 * @static 
	 */
	 public static function setPerPage($perPage){
		 static::$root->setPerPage($perPage);
	 }

	/**
	 * Get the default foreign key name for the model.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getForeignKey(){
		return static::$root->getForeignKey();
	 }

	/**
	 * Get the hidden attributes for the model.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getHidden(){
		return static::$root->getHidden();
	 }

	/**
	 * Set the hidden attributes for the model.
	 *
	 * @param array $hidden 
	 * @return void 
	 * @static 
	 */
	 public static function setHidden($hidden){
		 static::$root->setHidden($hidden);
	 }

	/**
	 * Set the visible attributes for the model.
	 *
	 * @param array $visible 
	 * @return void 
	 * @static 
	 */
	 public static function setVisible($visible){
		 static::$root->setVisible($visible);
	 }

	/**
	 * Get the fillable attributes for the model.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getFillable(){
		return static::$root->getFillable();
	 }

	/**
	 * Set the fillable attributes for the model.
	 *
	 * @param array $fillable 
	 * @return \Illuminate\Database\Eloquent\Model 
	 * @static 
	 */
	 public static function fillable($fillable){
		return static::$root->fillable($fillable);
	 }

	/**
	 * Set the guarded attributes for the model.
	 *
	 * @param array $guarded 
	 * @return \Illuminate\Database\Eloquent\Model 
	 * @static 
	 */
	 public static function guard($guarded){
		return static::$root->guard($guarded);
	 }

	/**
	 * Disable all mass assignable restrictions.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function unguard(){
		 static::$root->unguard();
	 }

	/**
	 * Enable the mass assignment restrictions.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function reguard(){
		 static::$root->reguard();
	 }

	/**
	 * Set "unguard" to a given state.
	 *
	 * @param bool $state 
	 * @return void 
	 * @static 
	 */
	 public static function setUnguardState($state){
		 static::$root->setUnguardState($state);
	 }

	/**
	 * Determine if the given attribute may be mass assigned.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function isFillable($key){
		return static::$root->isFillable($key);
	 }

	/**
	 * Determine if the given key is guarded.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function isGuarded($key){
		return static::$root->isGuarded($key);
	 }

	/**
	 * Determine if the model is totally guarded.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function totallyGuarded(){
		return static::$root->totallyGuarded();
	 }

	/**
	 * Get the relationships that are touched on save.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getTouchedRelations(){
		return static::$root->getTouchedRelations();
	 }

	/**
	 * Set the relationships that are touched on save.
	 *
	 * @param array $touches 
	 * @return void 
	 * @static 
	 */
	 public static function setTouchedRelations($touches){
		 static::$root->setTouchedRelations($touches);
	 }

	/**
	 * Get the value indicating whether the IDs are incrementing.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function getIncrementing(){
		return static::$root->getIncrementing();
	 }

	/**
	 * Set whether IDs are incrementing.
	 *
	 * @param bool $value 
	 * @return void 
	 * @static 
	 */
	 public static function setIncrementing($value){
		 static::$root->setIncrementing($value);
	 }

	/**
	 * Convert the model instance to JSON.
	 *
	 * @param int $options 
	 * @return string 
	 * @static 
	 */
	 public  function toJson($options = 0){
		return static::$root->toJson($options);
	 }

	/**
	 * Convert the model instance to an array.
	 *
	 * @return array 
	 * @static 
	 */
	 public  function toArray(){
		return static::$root->toArray();
	 }

	/**
	 * Convert the model's attributes to an array.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function attributesToArray(){
		return static::$root->attributesToArray();
	 }

	/**
	 * Get the model's relationships in array form.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function relationsToArray(){
		return static::$root->relationsToArray();
	 }

	/**
	 * Get an attribute from the model.
	 *
	 * @param string $key 
	 * @return mixed 
	 * @static 
	 */
	 public static function getAttribute($key){
		return static::$root->getAttribute($key);
	 }

	/**
	 * Determine if a get mutator exists for an attribute.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasGetMutator($key){
		return static::$root->hasGetMutator($key);
	 }

	/**
	 * Set a given attribute on the model.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function setAttribute($key, $value){
		 static::$root->setAttribute($key, $value);
	 }

	/**
	 * Determine if a set mutator exists for an attribute.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasSetMutator($key){
		return static::$root->hasSetMutator($key);
	 }

	/**
	 * Get the attributes that should be converted to dates.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getDates(){
		return static::$root->getDates();
	 }

	/**
	 * Clone the model into a new, non-existing instance.
	 *
	 * @return \Illuminate\Database\Eloquent\Model 
	 * @static 
	 */
	 public static function replicate(){
		return static::$root->replicate();
	 }

	/**
	 * Get all of the current attributes on the model.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getAttributes(){
		return static::$root->getAttributes();
	 }

	/**
	 * Set the array of model attributes. No checking is done.
	 *
	 * @param array $attributes 
	 * @param bool $sync 
	 * @return void 
	 * @static 
	 */
	 public static function setRawAttributes($attributes, $sync = false){
		 static::$root->setRawAttributes($attributes, $sync);
	 }

	/**
	 * Get the model's original attribute values.
	 *
	 * @param string|null $key 
	 * @param mixed $default 
	 * @return array 
	 * @static 
	 */
	 public static function getOriginal($key = null, $default = null){
		return static::$root->getOriginal($key, $default);
	 }

	/**
	 * Sync the original attributes with the current.
	 *
	 * @return \Illuminate\Database\Eloquent\Model 
	 * @static 
	 */
	 public static function syncOriginal(){
		return static::$root->syncOriginal();
	 }

	/**
	 * Determine if a given attribute is dirty.
	 *
	 * @param string $attribute 
	 * @return bool 
	 * @static 
	 */
	 public static function isDirty($attribute){
		return static::$root->isDirty($attribute);
	 }

	/**
	 * Get the attributes that have been changed since last sync.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getDirty(){
		return static::$root->getDirty();
	 }

	/**
	 * Get a specified relationship.
	 *
	 * @param string $relation 
	 * @return mixed 
	 * @static 
	 */
	 public static function getRelation($relation){
		return static::$root->getRelation($relation);
	 }

	/**
	 * Set the specific relationship in the model.
	 *
	 * @param string $relation 
	 * @param mixed $value 
	 * @return \Illuminate\Database\Eloquent\Model 
	 * @static 
	 */
	 public static function setRelation($relation, $value){
		return static::$root->setRelation($relation, $value);
	 }

	/**
	 * Set the entire relations array on the model.
	 *
	 * @param array $relations 
	 * @return \Illuminate\Database\Eloquent\Model 
	 * @static 
	 */
	 public static function setRelations($relations){
		return static::$root->setRelations($relations);
	 }

	/**
	 * Get the database connection for the model.
	 *
	 * @return \Illuminate\Database\Connection 
	 * @static 
	 */
	 public static function getConnection(){
		return static::$root->getConnection();
	 }

	/**
	 * Get the current connection name for the model.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getConnectionName(){
		return static::$root->getConnectionName();
	 }

	/**
	 * Set the connection associated with the model.
	 *
	 * @param string $name 
	 * @return void 
	 * @static 
	 */
	 public static function setConnection($name){
		 static::$root->setConnection($name);
	 }

	/**
	 * Resolve a connection instance.
	 *
	 * @param string $connection 
	 * @return \Illuminate\Database\Connection 
	 * @static 
	 */
	 public static function resolveConnection($connection = null){
		return static::$root->resolveConnection($connection);
	 }

	/**
	 * Get the connection resolver instance.
	 *
	 * @return \Illuminate\Database\ConnectionResolverInterface 
	 * @static 
	 */
	 public static function getConnectionResolver(){
		return static::$root->getConnectionResolver();
	 }

	/**
	 * Set the connection resolver instance.
	 *
	 * @param \Illuminate\Database\ConnectionResolverInterface $resolver 
	 * @return void 
	 * @static 
	 */
	 public static function setConnectionResolver($resolver){
		 static::$root->setConnectionResolver($resolver);
	 }

	/**
	 * Get the event dispatcher instance.
	 *
	 * @return \Illuminate\Events\Dispatcher 
	 * @static 
	 */
	 public static function getEventDispatcher(){
		return static::$root->getEventDispatcher();
	 }

	/**
	 * Set the event dispatcher instance.
	 *
	 * @param \Illuminate\Events\Dispatcher  
	 * @return void 
	 * @static 
	 */
	 public static function setEventDispatcher($dispatcher){
		 static::$root->setEventDispatcher($dispatcher);
	 }

	/**
	 * Unset the event dispatcher for models.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function unsetEventDispatcher(){
		 static::$root->unsetEventDispatcher();
	 }

	/**
	 * Get the mutated attributes for a given instance.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getMutatedAttributes(){
		return static::$root->getMutatedAttributes();
	 }

	/**
	 * Dynamically retrieve attributes on the model.
	 *
	 * @param string $key 
	 * @return mixed 
	 * @static 
	 */
	 public static function __get($key){
		return static::$root->__get($key);
	 }

	/**
	 * Dynamically set attributes on the model.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function __set($key, $value){
		 static::$root->__set($key, $value);
	 }

	/**
	 * Determine if the given attribute exists.
	 *
	 * @param mixed $offset 
	 * @return bool 
	 * @static 
	 */
	 public static function offsetExists($offset){
		return static::$root->offsetExists($offset);
	 }

	/**
	 * Get the value for a given offset.
	 *
	 * @param mixed $offset 
	 * @return mixed 
	 * @static 
	 */
	 public static function offsetGet($offset){
		return static::$root->offsetGet($offset);
	 }

	/**
	 * Set the value for a given offset.
	 *
	 * @param mixed $offset 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function offsetSet($offset, $value){
		 static::$root->offsetSet($offset, $value);
	 }

	/**
	 * Unset the value for a given offset.
	 *
	 * @param mixed $offset 
	 * @return void 
	 * @static 
	 */
	 public static function offsetUnset($offset){
		 static::$root->offsetUnset($offset);
	 }

	/**
	 * Determine if an attribute exists on the model.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function __isset($key){
		 static::$root->__isset($key);
	 }

	/**
	 * Unset an attribute on the model.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function __unset($key){
		 static::$root->__unset($key);
	 }

	/**
	 * Handle dynamic method calls into the method.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

	/**
	 * Handle dynamic static method calls into the method.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __callStatic($method, $parameters){
		return static::$root->__callStatic($method, $parameters);
	 }

	/**
	 * Convert the model to its string representation.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function __toString(){
		return static::$root->__toString();
	 }

	/**
	 * @var \Illuminate\Database\Query\Builder $root2
	 */
	 static private $root2;

	/**
	 * Set the columns to be selected.
	 *
	 * @param array $columns 
	 * @return static 
	 * @static 
	 */
	 public static function select($columns = array()){
		return static::$root2->select($columns);
	 }

	/**
	 * Add a new select column to the query.
	 *
	 * @param mixed $column 
	 * @return static 
	 * @static 
	 */
	 public static function addSelect($column){
		return static::$root2->addSelect($column);
	 }

	/**
	 * Force the query to only return distinct results.
	 *
	 * @return static 
	 * @static 
	 */
	 public static function distinct(){
		return static::$root2->distinct();
	 }

	/**
	 * Set the table which the query is targeting.
	 *
	 * @param string $table 
	 * @return static 
	 * @static 
	 */
	 public static function from($table){
		return static::$root2->from($table);
	 }

	/**
	 * Add a join clause to the query.
	 *
	 * @param string $table 
	 * @param string $first 
	 * @param string $operator 
	 * @param string $second 
	 * @param string $type 
	 * @return static 
	 * @static 
	 */
	 public static function join($table, $first, $operator = null, $second = null, $type = 'inner'){
		return static::$root2->join($table, $first, $operator, $second, $type);
	 }

	/**
	 * Add a left join to the query.
	 *
	 * @param string $table 
	 * @param string $first 
	 * @param string $operator 
	 * @param string $second 
	 * @return static 
	 * @static 
	 */
	 public static function leftJoin($table, $first, $operator = null, $second = null){
		return static::$root2->leftJoin($table, $first, $operator, $second);
	 }

	/**
	 * Add a basic where clause to the query.
	 *
	 * @param string $column 
	 * @param string $operator 
	 * @param mixed $value 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function where($column, $operator = null, $value = null, $boolean = 'and'){
		return static::$root2->where($column, $operator, $value, $boolean);
	 }

	/**
	 * Add an "or where" clause to the query.
	 *
	 * @param string $column 
	 * @param string $operator 
	 * @param mixed $value 
	 * @return static 
	 * @static 
	 */
	 public static function orWhere($column, $operator = null, $value = null){
		return static::$root2->orWhere($column, $operator, $value);
	 }

	/**
	 * Add a raw where clause to the query.
	 *
	 * @param string $sql 
	 * @param array $bindings 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function whereRaw($sql, $bindings = array(), $boolean = 'and'){
		return static::$root2->whereRaw($sql, $bindings, $boolean);
	 }

	/**
	 * Add a raw or where clause to the query.
	 *
	 * @param string $sql 
	 * @param array $bindings 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereRaw($sql, $bindings = array()){
		return static::$root2->orWhereRaw($sql, $bindings);
	 }

	/**
	 * Add a where between statement to the query.
	 *
	 * @param string $column 
	 * @param array $values 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function whereBetween($column, $values, $boolean = 'and'){
		return static::$root2->whereBetween($column, $values, $boolean);
	 }

	/**
	 * Add an or where between statement to the query.
	 *
	 * @param string $column 
	 * @param array $values 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereBetween($column, $values){
		return static::$root2->orWhereBetween($column, $values);
	 }

	/**
	 * Add a nested where statement to the query.
	 *
	 * @param \Closure $callback 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function whereNested($callback, $boolean = 'and'){
		return static::$root2->whereNested($callback, $boolean);
	 }

	/**
	 * Add an exists clause to the query.
	 *
	 * @param \Closure $callback 
	 * @param string $boolean 
	 * @param bool $not 
	 * @return static 
	 * @static 
	 */
	 public static function whereExists($callback, $boolean = 'and', $not = false){
		return static::$root2->whereExists($callback, $boolean, $not);
	 }

	/**
	 * Add an or exists clause to the query.
	 *
	 * @param \Closure $callback 
	 * @param bool $not 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereExists($callback, $not = false){
		return static::$root2->orWhereExists($callback, $not);
	 }

	/**
	 * Add a where not exists clause to the query.
	 *
	 * @param \Closure $calback 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function whereNotExists($callback, $boolean = 'and'){
		return static::$root2->whereNotExists($callback, $boolean);
	 }

	/**
	 * Add a where not exists clause to the query.
	 *
	 * @param \Closure $calback 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereNotExists($callback){
		return static::$root2->orWhereNotExists($callback);
	 }

	/**
	 * Add a "where in" clause to the query.
	 *
	 * @param string $column 
	 * @param mixed $values 
	 * @param string $boolean 
	 * @param bool $not 
	 * @return static 
	 * @static 
	 */
	 public static function whereIn($column, $values, $boolean = 'and', $not = false){
		return static::$root2->whereIn($column, $values, $boolean, $not);
	 }

	/**
	 * Add an "or where in" clause to the query.
	 *
	 * @param string $column 
	 * @param mixed $values 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereIn($column, $values){
		return static::$root2->orWhereIn($column, $values);
	 }

	/**
	 * Add a "where not in" clause to the query.
	 *
	 * @param string $column 
	 * @param mixed $values 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function whereNotIn($column, $values, $boolean = 'and'){
		return static::$root2->whereNotIn($column, $values, $boolean);
	 }

	/**
	 * Add an "or where not in" clause to the query.
	 *
	 * @param string $column 
	 * @param mixed $values 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereNotIn($column, $values){
		return static::$root2->orWhereNotIn($column, $values);
	 }

	/**
	 * Add a "where null" clause to the query.
	 *
	 * @param string $column 
	 * @param string $boolean 
	 * @param bool $not 
	 * @return static 
	 * @static 
	 */
	 public static function whereNull($column, $boolean = 'and', $not = false){
		return static::$root2->whereNull($column, $boolean, $not);
	 }

	/**
	 * Add an "or where null" clause to the query.
	 *
	 * @param string $column 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereNull($column){
		return static::$root2->orWhereNull($column);
	 }

	/**
	 * Add a "where not null" clause to the query.
	 *
	 * @param string $column 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function whereNotNull($column, $boolean = 'and'){
		return static::$root2->whereNotNull($column, $boolean);
	 }

	/**
	 * Add an "or where not null" clause to the query.
	 *
	 * @param string $column 
	 * @return static 
	 * @static 
	 */
	 public static function orWhereNotNull($column){
		return static::$root2->orWhereNotNull($column);
	 }

	/**
	 * Handles dynamic "where" clauses to the query.
	 *
	 * @param string $method 
	 * @param string $parameters 
	 * @return static 
	 * @static 
	 */
	 public static function dynamicWhere($method, $parameters){
		return static::$root2->dynamicWhere($method, $parameters);
	 }

	/**
	 * Add a "group by" clause to the query.
	 *
	 * @param \Illuminate\Database\Query\dynamic $columns 
	 * @return static 
	 * @static 
	 */
	 public static function groupBy(){
		return static::$root2->groupBy();
	 }

	/**
	 * Add a "having" clause to the query.
	 *
	 * @param string $column 
	 * @param string $operator 
	 * @param string $value 
	 * @return static 
	 * @static 
	 */
	 public static function having($column, $operator = null, $value = null){
		return static::$root2->having($column, $operator, $value);
	 }

	/**
	 * Add a raw having clause to the query.
	 *
	 * @param string $sql 
	 * @param array $bindings 
	 * @param string $boolean 
	 * @return static 
	 * @static 
	 */
	 public static function havingRaw($sql, $bindings = array(), $boolean = 'and'){
		return static::$root2->havingRaw($sql, $bindings, $boolean);
	 }

	/**
	 * Add a raw or having clause to the query.
	 *
	 * @param string $sql 
	 * @param array $bindings 
	 * @return static 
	 * @static 
	 */
	 public static function orHavingRaw($sql, $bindings = array()){
		return static::$root2->orHavingRaw($sql, $bindings);
	 }

	/**
	 * Add an "order by" clause to the query.
	 *
	 * @param string $column 
	 * @param string $direction 
	 * @return static 
	 * @static 
	 */
	 public static function orderBy($column, $direction = 'asc'){
		return static::$root2->orderBy($column, $direction);
	 }

	/**
	 * Set the "offset" value of the query.
	 *
	 * @param int $value 
	 * @return static 
	 * @static 
	 */
	 public static function skip($value){
		return static::$root2->skip($value);
	 }

	/**
	 * Set the "limit" value of the query.
	 *
	 * @param int $value 
	 * @return static 
	 * @static 
	 */
	 public static function take($value){
		return static::$root2->take($value);
	 }

	/**
	 * Set the limit and offset for a given page.
	 *
	 * @param int $page 
	 * @param int $perPage 
	 * @return static 
	 * @static 
	 */
	 public static function forPage($page, $perPage = 15){
		return static::$root2->forPage($page, $perPage);
	 }

	/**
	 * Add a union statement to the query.
	 *
	 * @param \Illuminate\Database\Query\Builder|\Closure $query 
	 * @param bool $all 
	 * @return static 
	 * @static 
	 */
	 public static function union($query, $all = false){
		return static::$root2->union($query, $all);
	 }

	/**
	 * Add a union all statement to the query.
	 *
	 * @param \Illuminate\Database\Query\Builder|\Closure $query 
	 * @return static 
	 * @static 
	 */
	 public static function unionAll($query){
		return static::$root2->unionAll($query);
	 }

	/**
	 * Get the SQL representation of the query.
	 *
	 * @return string 
	 * @static 
	 */
	 public  function toSql(){
		return static::$root2->toSql();
	 }

	/**
	 * Indicate that the query results should be cached.
	 *
	 * @param int $minutes 
	 * @param string $key 
	 * @return static 
	 * @static 
	 */
	 public static function remember($minutes, $key = null){
		return static::$root2->remember($minutes, $key);
	 }

	/**
	 * Pluck a single column from the database.
	 *
	 * @param string $column 
	 * @return static 
	 * @static 
	 */
	 public static function pluck($column){
		return static::$root2->pluck($column);
	 }

	/**
	 * Execute the query and get the first result.
	 *
	 * @param array $columns 
	 * @return static 
	 * @static 
	 */
	 public static function first($columns = array()){
		return static::$root2->first($columns);
	 }

	/**
	 * Execute the query as a "select" statement.
	 *
	 * @param array $columns 
	 * @return array|\Eloquent[]|static[] 
	 * @static 
	 */
	 public static function get($columns = array()){
		return static::$root2->get($columns);
	 }

	/**
	 * Execute the query as a fresh "select" statement.
	 *
	 * @param array $columns 
	 * @return array 
	 * @static 
	 */
	 public static function getFresh($columns = array()){
		return static::$root2->getFresh($columns);
	 }

	/**
	 * Execute the query as a cached "select" statement.
	 *
	 * @param array $columns 
	 * @return array 
	 * @static 
	 */
	 public static function getCached($columns = array()){
		return static::$root2->getCached($columns);
	 }

	/**
	 * Get a unique cache key for the complete query.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getCacheKey(){
		return static::$root2->getCacheKey();
	 }

	/**
	 * Generate the unique cache key for the query.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function generateCacheKey(){
		return static::$root2->generateCacheKey();
	 }

	/**
	 * Get an array with the values of a given column.
	 *
	 * @param string $column 
	 * @param string $key 
	 * @return array 
	 * @static 
	 */
	 public static function lists($column, $key = null){
		return static::$root2->lists($column, $key);
	 }

	/**
	 * Get a paginator for the "select" statement.
	 *
	 * @param int $perPage 
	 * @param array $columns 
	 * @return \Illuminate\Pagination\Paginator 
	 * @static 
	 */
	 public static function paginate($perPage = 15, $columns = array()){
		return static::$root2->paginate($perPage, $columns);
	 }

	/**
	 * Build a paginator instance from a raw result array.
	 *
	 * @param \Illuminate\Pagination\Environment $paginator 
	 * @param array $results 
	 * @param int $perPage 
	 * @return \Illuminate\Pagination\Paginator 
	 * @static 
	 */
	 public static function buildRawPaginator($paginator, $results, $perPage){
		return static::$root2->buildRawPaginator($paginator, $results, $perPage);
	 }

	/**
	 * Get the count of the total records for pagination.
	 *
	 * @return int 
	 * @static 
	 */
	 public static function getPaginationCount(){
		return static::$root2->getPaginationCount();
	 }

	/**
	 * Determine if any rows exist for the current query.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function exists(){
		return static::$root2->exists();
	 }

	/**
	 * Retrieve the "count" result of the query.
	 *
	 * @param string $column 
	 * @return int 
	 * @static 
	 */
	 public static function count($column = '*'){
		return static::$root2->count($column);
	 }

	/**
	 * Retrieve the minimum value of a given column.
	 *
	 * @param string $column 
	 * @return mixed 
	 * @static 
	 */
	 public static function min($column){
		return static::$root2->min($column);
	 }

	/**
	 * Retrieve the maximum value of a given column.
	 *
	 * @param string $column 
	 * @return mixed 
	 * @static 
	 */
	 public static function max($column){
		return static::$root2->max($column);
	 }

	/**
	 * Retrieve the sum of the values of a given column.
	 *
	 * @param string $column 
	 * @return mixed 
	 * @static 
	 */
	 public static function sum($column){
		return static::$root2->sum($column);
	 }

	/**
	 * Retrieve the average of the values of a given column.
	 *
	 * @param string $column 
	 * @return mixed 
	 * @static 
	 */
	 public static function avg($column){
		return static::$root2->avg($column);
	 }

	/**
	 * Execute an aggregate function on the database.
	 *
	 * @param string $function 
	 * @param array $columns 
	 * @return mixed 
	 * @static 
	 */
	 public static function aggregate($function, $columns = array()){
		return static::$root2->aggregate($function, $columns);
	 }

	/**
	 * Insert a new record into the database.
	 *
	 * @param array $values 
	 * @return bool 
	 * @static 
	 */
	 public static function insert($values){
		return static::$root2->insert($values);
	 }

	/**
	 * Insert a new record and get the value of the primary key.
	 *
	 * @param array $values 
	 * @param string $sequence 
	 * @return int 
	 * @static 
	 */
	 public static function insertGetId($values, $sequence = null){
		return static::$root2->insertGetId($values, $sequence);
	 }

	/**
	 * Increment a column's value by a given amount.
	 *
	 * @param string $column 
	 * @param int $amount 
	 * @param array $extra 
	 * @return int 
	 * @static 
	 */
	 public static function increment($column, $amount = 1, $extra = array()){
		return static::$root2->increment($column, $amount, $extra);
	 }

	/**
	 * Decrement a column's value by a given amount.
	 *
	 * @param string $column 
	 * @param int $amount 
	 * @param array $extra 
	 * @return int 
	 * @static 
	 */
	 public static function decrement($column, $amount = 1, $extra = array()){
		return static::$root2->decrement($column, $amount, $extra);
	 }

	/**
	 * Run a truncate statement on the table.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function truncate(){
		 static::$root2->truncate();
	 }

	/**
	 * Merge an array of where clauses and bindings.
	 *
	 * @param array $wheres 
	 * @param array $bindings 
	 * @return void 
	 * @static 
	 */
	 public static function mergeWheres($wheres, $bindings){
		 static::$root2->mergeWheres($wheres, $bindings);
	 }

	/**
	 * Get a copy of the where clauses and bindings in an array.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getAndResetWheres(){
		return static::$root2->getAndResetWheres();
	 }

	/**
	 * Create a raw database expression.
	 *
	 * @param mixed $value 
	 * @return \Illuminate\Database\Query\Expression 
	 * @static 
	 */
	 public static function raw($value){
		return static::$root2->raw($value);
	 }

	/**
	 * Get the current query value bindings.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getBindings(){
		return static::$root2->getBindings();
	 }

	/**
	 * Set the bindings on the query builder.
	 *
	 * @param array $bindings 
	 * @return void 
	 * @static 
	 */
	 public static function setBindings($bindings){
		 static::$root2->setBindings($bindings);
	 }

	/**
	 * Merge an array of bindings into our bindings.
	 *
	 * @param \Illuminate\Database\Query\Builder $query 
	 * @return static 
	 * @static 
	 */
	 public static function mergeBindings($query){
		return static::$root2->mergeBindings($query);
	 }

	/**
	 * Get the database query processor instance.
	 *
	 * @return \Illuminate\Database\Query\Processors\Processor 
	 * @static 
	 */
	 public static function getProcessor(){
		return static::$root2->getProcessor();
	 }

	/**
	 * Get the query grammar instance.
	 *
	 * @return \Illuminate\Database\Grammar 
	 * @static 
	 */
	 public static function getGrammar(){
		return static::$root2->getGrammar();
	 }

 }
}

namespace  {
 class Event extends Illuminate\Support\Facades\Event{
	/**
	 * @var \Illuminate\Events\Dispatcher $root
	 */
	 static private $root;

	/**
	 * Create a new event dispatcher instance.
	 *
	 * @param \Illuminate\Container\Container $container 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($container = null){
		 static::$root->__construct($container);
	 }

	/**
	 * Register an event listener with the dispatcher.
	 *
	 * @param string $event 
	 * @param mixed $listener 
	 * @param int $priority 
	 * @return void 
	 * @static 
	 */
	 public static function listen($event, $listener, $priority = 0){
		 static::$root->listen($event, $listener, $priority);
	 }

	/**
	 * Determine if a given event has listeners.
	 *
	 * @param string $eventName 
	 * @return bool 
	 * @static 
	 */
	 public static function hasListeners($eventName){
		return static::$root->hasListeners($eventName);
	 }

	/**
	 * Register a queued event and payload.
	 *
	 * @param string $event 
	 * @param array $payload 
	 * @return void 
	 * @static 
	 */
	 public static function queue($event, $payload = array()){
		 static::$root->queue($event, $payload);
	 }

	/**
	 * Register an event subscriber with the dispatcher.
	 *
	 * @param string $subscriber 
	 * @return void 
	 * @static 
	 */
	 public static function subscribe($subscriber){
		 static::$root->subscribe($subscriber);
	 }

	/**
	 * Fire an event until the first non-null response is returned.
	 *
	 * @param string $event 
	 * @param array $payload 
	 * @return mixed 
	 * @static 
	 */
	 public static function until($event, $payload = array()){
		return static::$root->until($event, $payload);
	 }

	/**
	 * Flush a set of queued events.
	 *
	 * @param string $event 
	 * @return void 
	 * @static 
	 */
	 public static function flush($event){
		 static::$root->flush($event);
	 }

	/**
	 * Fire an event and call the listeners.
	 *
	 * @param string $event 
	 * @param mixed $payload 
	 * @param boolean $halt 
	 * @return void 
	 * @static 
	 */
	 public static function fire($event, $payload = array(), $halt = false){
		 static::$root->fire($event, $payload, $halt);
	 }

	/**
	 * Get all of the listeners for a given event name.
	 *
	 * @param string $eventName 
	 * @return array 
	 * @static 
	 */
	 public static function getListeners($eventName){
		return static::$root->getListeners($eventName);
	 }

	/**
	 * Register an event listener with the dispatcher.
	 *
	 * @param mixed $listener 
	 * @return void 
	 * @static 
	 */
	 public static function makeListener($listener){
		 static::$root->makeListener($listener);
	 }

	/**
	 * Create a class based listener using the IoC container.
	 *
	 * @param mixed $listener 
	 * @return \Illuminate\Events\Closure 
	 * @static 
	 */
	 public static function createClassListener($listener){
		return static::$root->createClassListener($listener);
	 }

	/**
	 * Remove a set of listeners from the dispatcher.
	 *
	 * @param string $event 
	 * @return void 
	 * @static 
	 */
	 public static function forget($event){
		 static::$root->forget($event);
	 }

 }
}

namespace  {
 class File extends Illuminate\Support\Facades\File{
	/**
	 * @var \Illuminate\Filesystem\Filesystem $root
	 */
	 static private $root;

	/**
	 * Determine if a file exists.
	 *
	 * @param string $path 
	 * @return bool 
	 * @static 
	 */
	 public static function exists($path){
		return static::$root->exists($path);
	 }

	/**
	 * Get the contents of a file.
	 *
	 * @param string $path 
	 * @return string 
	 * @static 
	 */
	 public static function get($path){
		return static::$root->get($path);
	 }

	/**
	 * Get the contents of a remote file.
	 *
	 * @param string $path 
	 * @return string 
	 * @static 
	 */
	 public static function getRemote($path){
		return static::$root->getRemote($path);
	 }

	/**
	 * Get the returned value of a file.
	 *
	 * @param string $path 
	 * @return mixed 
	 * @static 
	 */
	 public static function getRequire($path){
		return static::$root->getRequire($path);
	 }

	/**
	 * Require the given file once.
	 *
	 * @param string $file 
	 * @return void 
	 * @static 
	 */
	 public static function requireOnce($file){
		 static::$root->requireOnce($file);
	 }

	/**
	 * Write the contents of a file.
	 *
	 * @param string $path 
	 * @param string $contents 
	 * @return int 
	 * @static 
	 */
	 public static function put($path, $contents){
		return static::$root->put($path, $contents);
	 }

	/**
	 * Append to a file.
	 *
	 * @param string $path 
	 * @param string $data 
	 * @return int 
	 * @static 
	 */
	 public static function append($path, $data){
		return static::$root->append($path, $data);
	 }

	/**
	 * Delete the file at a given path.
	 *
	 * @param string $path 
	 * @return bool 
	 * @static 
	 */
	 public static function delete($path){
		return static::$root->delete($path);
	 }

	/**
	 * Move a file to a new location.
	 *
	 * @param string $path 
	 * @param string $target 
	 * @return void 
	 * @static 
	 */
	 public static function move($path, $target){
		 static::$root->move($path, $target);
	 }

	/**
	 * Copy a file to a new location.
	 *
	 * @param string $path 
	 * @param string $target 
	 * @return void 
	 * @static 
	 */
	 public static function copy($path, $target){
		 static::$root->copy($path, $target);
	 }

	/**
	 * Extract the file extension from a file path.
	 *
	 * @param string $path 
	 * @return string 
	 * @static 
	 */
	 public static function extension($path){
		return static::$root->extension($path);
	 }

	/**
	 * Get the file type of a given file.
	 *
	 * @param string $path 
	 * @return string 
	 * @static 
	 */
	 public static function type($path){
		return static::$root->type($path);
	 }

	/**
	 * Get the file size of a given file.
	 *
	 * @param string $path 
	 * @return int 
	 * @static 
	 */
	 public static function size($path){
		return static::$root->size($path);
	 }

	/**
	 * Get the file's last modification time.
	 *
	 * @param string $path 
	 * @return int 
	 * @static 
	 */
	 public static function lastModified($path){
		return static::$root->lastModified($path);
	 }

	/**
	 * Determine if the given path is a directory.
	 *
	 * @param string $directory 
	 * @return bool 
	 * @static 
	 */
	 public static function isDirectory($directory){
		return static::$root->isDirectory($directory);
	 }

	/**
	 * Determine if the given path is writable.
	 *
	 * @param string $path 
	 * @return bool 
	 * @static 
	 */
	 public static function isWritable($path){
		return static::$root->isWritable($path);
	 }

	/**
	 * Determine if the given path is a file.
	 *
	 * @param string $file 
	 * @return bool 
	 * @static 
	 */
	 public static function isFile($file){
		return static::$root->isFile($file);
	 }

	/**
	 * Find path names matching a given pattern.
	 *
	 * @param string $pattern 
	 * @param int $flags 
	 * @return array 
	 * @static 
	 */
	 public static function glob($pattern, $flags = 0){
		return static::$root->glob($pattern, $flags);
	 }

	/**
	 * Get an array of all files in a directory.
	 *
	 * @param string $directory 
	 * @return array 
	 * @static 
	 */
	 public static function files($directory){
		return static::$root->files($directory);
	 }

	/**
	 * Get all of the files from the given directory (recursive).
	 *
	 * @param string $directory 
	 * @return array 
	 * @static 
	 */
	 public static function allFiles($directory){
		return static::$root->allFiles($directory);
	 }

	/**
	 * Get all of the directories within a given directory.
	 *
	 * @param string $directory 
	 * @return array 
	 * @static 
	 */
	 public static function directories($directory){
		return static::$root->directories($directory);
	 }

	/**
	 * Create a directory.
	 *
	 * @param string $path 
	 * @param int $mode 
	 * @param bool $recursive 
	 * @return bool 
	 * @static 
	 */
	 public static function makeDirectory($path, $mode = 511, $recursive = false){
		return static::$root->makeDirectory($path, $mode, $recursive);
	 }

	/**
	 * Copy a directory from one location to another.
	 *
	 * @param string $directory 
	 * @param string $destination 
	 * @param int $options 
	 * @return void 
	 * @static 
	 */
	 public static function copyDirectory($directory, $destination, $options = null){
		 static::$root->copyDirectory($directory, $destination, $options);
	 }

	/**
	 * Recursively delete a directory.
	 * 
	 * The directory itself may be optionally preserved.
	 *
	 * @param string $directory 
	 * @param bool $preserve 
	 * @return void 
	 * @static 
	 */
	 public static function deleteDirectory($directory, $preserve = false){
		 static::$root->deleteDirectory($directory, $preserve);
	 }

	/**
	 * Empty the specified directory of all files and folders.
	 *
	 * @param string $directory 
	 * @return void 
	 * @static 
	 */
	 public static function cleanDirectory($directory){
		 static::$root->cleanDirectory($directory);
	 }

 }
}

namespace  {
 class Form extends Illuminate\Support\Facades\Form{
	/**
	 * @var \Illuminate\Html\FormBuilder $root
	 */
	 static private $root;

	/**
	 * Create a new form builder instance.
	 *
	 * @param \Illuminate\Routing\UrlGenerator $url 
	 * @param \Illuminate\Html\HtmlBuilder $html 
	 * @param string $csrfToken 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($html, $url, $csrfToken){
		 static::$root->__construct($html, $url, $csrfToken);
	 }

	/**
	 * Open up a new HTML form.
	 *
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function open($options = array()){
		return static::$root->open($options);
	 }

	/**
	 * Create a new model based form builder.
	 *
	 * @param mixed $model 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function model($model, $options = array()){
		return static::$root->model($model, $options);
	 }

	/**
	 * Close the current form.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function close(){
		return static::$root->close();
	 }

	/**
	 * Generate a hidden field with the current CSRF token.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function token(){
		return static::$root->token();
	 }

	/**
	 * Create a form label element.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function label($name, $value = null, $options = array()){
		return static::$root->label($name, $value, $options);
	 }

	/**
	 * Create a form input field.
	 *
	 * @param string $type 
	 * @param string $name 
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function input($type, $name, $value = null, $options = array()){
		return static::$root->input($type, $name, $value, $options);
	 }

	/**
	 * Create a text input field.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function text($name, $value = null, $options = array()){
		return static::$root->text($name, $value, $options);
	 }

	/**
	 * Create a password input field.
	 *
	 * @param string $name 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function password($name, $options = array()){
		return static::$root->password($name, $options);
	 }

	/**
	 * Create a hidden input field.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function hidden($name, $value = null, $options = array()){
		return static::$root->hidden($name, $value, $options);
	 }

	/**
	 * Create an e-mail input field.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function email($name, $value = null, $options = array()){
		return static::$root->email($name, $value, $options);
	 }

	/**
	 * Create a file input field.
	 *
	 * @param string $name 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function file($name, $options = array()){
		return static::$root->file($name, $options);
	 }

	/**
	 * Create a textarea input field.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function textarea($name, $value = null, $options = array()){
		return static::$root->textarea($name, $value, $options);
	 }

	/**
	 * Create a select box field.
	 *
	 * @param string $name 
	 * @param array $list 
	 * @param string $selected 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function select($name, $list = array(), $selected = null, $options = array()){
		return static::$root->select($name, $list, $selected, $options);
	 }

	/**
	 * Create a checkbox input field.
	 *
	 * @param string $name 
	 * @param mixed $value 
	 * @param bool $checked 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function checkbox($name, $value = 1, $checked = null, $options = array()){
		return static::$root->checkbox($name, $value, $checked, $options);
	 }

	/**
	 * Create a radio button input field.
	 *
	 * @param string $name 
	 * @param mixed $value 
	 * @param bool $checked 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function radio($name, $value = null, $checked = null, $options = array()){
		return static::$root->radio($name, $value, $checked, $options);
	 }

	/**
	 * Create a HTML reset input element.
	 *
	 * @param string $value 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function reset($value, $attributes = array()){
		return static::$root->reset($value, $attributes);
	 }

	/**
	 * Create a HTML image input element.
	 *
	 * @param string $url 
	 * @param string $name 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function image($url, $name = null, $attributes = array()){
		return static::$root->image($url, $name, $attributes);
	 }

	/**
	 * Create a submit button element.
	 *
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function submit($value = null, $options = array()){
		return static::$root->submit($value, $options);
	 }

	/**
	 * Create a button element.
	 *
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function button($value = null, $options = array()){
		return static::$root->button($value, $options);
	 }

	/**
	 * Register a custom form macro.
	 *
	 * @param string $name 
	 * @param callable $macro 
	 * @return void 
	 * @static 
	 */
	 public static function macro($name, $macro){
		 static::$root->macro($name, $macro);
	 }

	/**
	 * Get the value that should be assigned to the field.
	 *
	 * @param string $name 
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function getValueAttribute($name, $value = null){
		return static::$root->getValueAttribute($name, $value);
	 }

	/**
	 * Get the session store implementation.
	 *
	 * @return \Illuminate\Session\Store $session
	 * @static 
	 */
	 public static function getSessionStore(){
		return static::$root->getSessionStore();
	 }

	/**
	 * Set the session store implementation.
	 *
	 * @param \Illuminate\Session\Store $session 
	 * @return \Illuminate\Html\FormBuilder 
	 * @static 
	 */
	 public static function setSessionStore($session){
		return static::$root->setSessionStore($session);
	 }

	/**
	 * Dynamically handle calls to the form builder.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

 }
}

namespace  {
 class Hash extends Illuminate\Support\Facades\Hash{
	/**
	 * @var \Illuminate\Hashing\BcryptHasher $root
	 */
	 static private $root;

	/**
	 * Create a new Bcrypt hasher instance.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function __construct(){
		 static::$root->__construct();
	 }

	/**
	 * Hash the given value.
	 *
	 * @param string $value 
	 * @param array $options 
	 * @return string 
	 * @static 
	 */
	 public static function make($value, $options = array()){
		return static::$root->make($value, $options);
	 }

	/**
	 * Check the given plain value against a hash.
	 *
	 * @param string $value 
	 * @param string $hashedValue 
	 * @param array $options 
	 * @return bool 
	 * @static 
	 */
	 public static function check($value, $hashedValue, $options = array()){
		return static::$root->check($value, $hashedValue, $options);
	 }

	/**
	 * Check if the given hash has been hashed using the given options.
	 *
	 * @param string $hashedValue 
	 * @param array $options 
	 * @return bool 
	 * @static 
	 */
	 public static function needsRehash($hashedValue, $options = array()){
		return static::$root->needsRehash($hashedValue, $options);
	 }

 }
}

namespace  {
 class HTML extends Illuminate\Support\Facades\HTML{
	/**
	 * @var \Illuminate\Html\HtmlBuilder $root
	 */
	 static private $root;

	/**
	 * Create a new HTML builder instance.
	 *
	 * @param \Illuminate\Routing\UrlGenerator $url 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($url = null){
		 static::$root->__construct($url);
	 }

	/**
	 * Register a custom HTML macro.
	 *
	 * @param string $name 
	 * @param callable $macro 
	 * @return void 
	 * @static 
	 */
	 public static function macro($name, $macro){
		 static::$root->macro($name, $macro);
	 }

	/**
	 * Convert an HTML string to entities.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function entities($value){
		return static::$root->entities($value);
	 }

	/**
	 * Convert entities to HTML characters.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function decode($value){
		return static::$root->decode($value);
	 }

	/**
	 * Generate a link to a JavaScript file.
	 *
	 * @param string $url 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function script($url, $attributes = array()){
		return static::$root->script($url, $attributes);
	 }

	/**
	 * Generate a link to a CSS file.
	 *
	 * @param string $url 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function style($url, $attributes = array()){
		return static::$root->style($url, $attributes);
	 }

	/**
	 * Generate an HTML image element.
	 *
	 * @param string $url 
	 * @param string $alt 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function image($url, $alt = null, $attributes = array()){
		return static::$root->image($url, $alt, $attributes);
	 }

	/**
	 * Generate a HTML link.
	 *
	 * @param string $url 
	 * @param string $title 
	 * @param array $attributes 
	 * @param bool $secure 
	 * @return string 
	 * @static 
	 */
	 public static function link($url, $title = null, $attributes = array(), $secure = null){
		return static::$root->link($url, $title, $attributes, $secure);
	 }

	/**
	 * Generate a HTTPS HTML link.
	 *
	 * @param string $url 
	 * @param string $title 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function secureLink($url, $title = null, $attributes = array()){
		return static::$root->secureLink($url, $title, $attributes);
	 }

	/**
	 * Generate a HTML link to an asset.
	 *
	 * @param string $url 
	 * @param string $title 
	 * @param array $attributes 
	 * @param bool $secure 
	 * @return string 
	 * @static 
	 */
	 public static function linkAsset($url, $title = null, $attributes = array(), $secure = null){
		return static::$root->linkAsset($url, $title, $attributes, $secure);
	 }

	/**
	 * Generate a HTTPS HTML link to an asset.
	 *
	 * @param string $url 
	 * @param string $title 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function linkSecureAsset($url, $title = null, $attributes = array()){
		return static::$root->linkSecureAsset($url, $title, $attributes);
	 }

	/**
	 * Generate a HTML link to a named route.
	 *
	 * @param string $name 
	 * @param string $title 
	 * @param array $parameters 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function linkRoute($name, $title = null, $parameters = array(), $attributes = array()){
		return static::$root->linkRoute($name, $title, $parameters, $attributes);
	 }

	/**
	 * Generate a HTML link to a controller action.
	 *
	 * @param string $action 
	 * @param string $title 
	 * @param array $parameters 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function linkAction($action, $title = null, $parameters = array(), $attributes = array()){
		return static::$root->linkAction($action, $title, $parameters, $attributes);
	 }

	/**
	 * Generate a HTML link to an email address.
	 *
	 * @param string $email 
	 * @param string $title 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function mailto($email, $title = null, $attributes = array()){
		return static::$root->mailto($email, $title, $attributes);
	 }

	/**
	 * Obfuscate an e-mail address to prevent spam-bots from sniffing it.
	 *
	 * @param string $email 
	 * @return string 
	 * @static 
	 */
	 public static function email($email){
		return static::$root->email($email);
	 }

	/**
	 * Generate an ordered list of items.
	 *
	 * @param array $list 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function ol($list, $attributes = array()){
		return static::$root->ol($list, $attributes);
	 }

	/**
	 * Generate an un-ordered list of items.
	 *
	 * @param array $list 
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function ul($list, $attributes = array()){
		return static::$root->ul($list, $attributes);
	 }

	/**
	 * Build an HTML attribute string from an array.
	 *
	 * @param array $attributes 
	 * @return string 
	 * @static 
	 */
	 public static function attributes($attributes){
		return static::$root->attributes($attributes);
	 }

	/**
	 * Obfuscate a string to prevent spam-bots from sniffing it.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function obfuscate($value){
		return static::$root->obfuscate($value);
	 }

	/**
	 * Dynamically handle calls to the html class.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

 }
}

namespace  {
 class Input extends Illuminate\Support\Facades\Input{
	/**
	 * @var \Illuminate\Http\Request $root
	 */
	 static private $root;

	/**
	 * Return the Request instance.
	 *
	 * @return \Illuminate\Http\Request 
	 * @static 
	 */
	 public static function instance(){
		return static::$root->instance();
	 }

	/**
	 * Get the root URL for the application.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function root(){
		return static::$root->root();
	 }

	/**
	 * Get the URL (no query string) for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function url(){
		return static::$root->url();
	 }

	/**
	 * Get the full URL for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function fullUrl(){
		return static::$root->fullUrl();
	 }

	/**
	 * Get the current path info for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function path(){
		return static::$root->path();
	 }

	/**
	 * Get a segment from the URI (1 based index).
	 *
	 * @param string $index 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function segment($index, $default = null){
		return static::$root->segment($index, $default);
	 }

	/**
	 * Get all of the segments for the request path.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function segments(){
		return static::$root->segments();
	 }

	/**
	 * Determine if the current request URI matches a pattern.
	 *
	 * @param string $pattern 
	 * @return bool 
	 * @static 
	 */
	 public static function is($pattern){
		return static::$root->is($pattern);
	 }

	/**
	 * Determine if the request is the result of an AJAX call.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function ajax(){
		return static::$root->ajax();
	 }

	/**
	 * Determine if the request is over HTTPS.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function secure(){
		return static::$root->secure();
	 }

	/**
	 * Determine if the request contains a given input item.
	 *
	 * @param string|array $key 
	 * @return bool 
	 * @static 
	 */
	 public static function has($key){
		return static::$root->has($key);
	 }

	/**
	 * Get all of the input and files for the request.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function all(){
		return static::$root->all();
	 }

	/**
	 * Retrieve an input item from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function input($key = null, $default = null){
		return static::$root->input($key, $default);
	 }

	/**
	 * Get a subset of the items from the input data.
	 *
	 * @param array $keys 
	 * @return array 
	 * @static 
	 */
	 public static function only($keys){
		return static::$root->only($keys);
	 }

	/**
	 * Get all of the input except for a specified array of items.
	 *
	 * @param array $keys 
	 * @return array 
	 * @static 
	 */
	 public static function except($keys){
		return static::$root->except($keys);
	 }

	/**
	 * Retrieve a query string item from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function query($key = null, $default = null){
		return static::$root->query($key, $default);
	 }

	/**
	 * Retrieve a cookie from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function cookie($key = null, $default = null){
		return static::$root->cookie($key, $default);
	 }

	/**
	 * Retrieve a file from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return \Symfony\Component\HttpFoundation\File\UploadedFile 
	 * @static 
	 */
	 public static function file($key = null, $default = null){
		return static::$root->file($key, $default);
	 }

	/**
	 * Determine if the uploaded data contains a file.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasFile($key){
		return static::$root->hasFile($key);
	 }

	/**
	 * Retrieve a header from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function header($key = null, $default = null){
		return static::$root->header($key, $default);
	 }

	/**
	 * Retrieve a server variable from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function server($key = null, $default = null){
		return static::$root->server($key, $default);
	 }

	/**
	 * Retrieve an old input item.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function old($key = null, $default = null){
		return static::$root->old($key, $default);
	 }

	/**
	 * Flash the input for the current request to the session.
	 *
	 * @param string $filter 
	 * @param array $keys 
	 * @return void 
	 * @static 
	 */
	 public static function flash($filter = null, $keys = array()){
		 static::$root->flash($filter, $keys);
	 }

	/**
	 * Flash only some of the input to the session.
	 *
	 * @param \Illuminate\Http\dynamic  string
	 * @return void 
	 * @static 
	 */
	 public static function flashOnly($keys){
		 static::$root->flashOnly($keys);
	 }

	/**
	 * Flash only some of the input to the session.
	 *
	 * @param \Illuminate\Http\dynamic  string
	 * @return void 
	 * @static 
	 */
	 public static function flashExcept($keys){
		 static::$root->flashExcept($keys);
	 }

	/**
	 * Flush all of the old input from the session.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flush(){
		 static::$root->flush();
	 }

	/**
	 * Merge new input into the current request's input array.
	 *
	 * @param array $input 
	 * @return void 
	 * @static 
	 */
	 public static function merge($input){
		 static::$root->merge($input);
	 }

	/**
	 * Replace the input for the current request.
	 *
	 * @param array $input 
	 * @return void 
	 * @static 
	 */
	 public static function replace($input){
		 static::$root->replace($input);
	 }

	/**
	 * Get the JSON payload for the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function json($key = null, $default = null){
		return static::$root->json($key, $default);
	 }

	/**
	 * Determine if the request is sending JSON.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function isJson(){
		return static::$root->isJson();
	 }

	/**
	 * Determine if the current request is asking for JSON in return.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function wantsJson(){
		return static::$root->wantsJson();
	 }

	/**
	 * Get the Illuminate session store implementation.
	 *
	 * @return \Illuminate\Session\Store 
	 * @static 
	 */
	 public static function getSessionStore(){
		return static::$root->getSessionStore();
	 }

	/**
	 * Set the Illuminate session store implementation.
	 *
	 * @param \Illuminate\Session\Store $session 
	 * @return void 
	 * @static 
	 */
	 public static function setSessionStore($session){
		 static::$root->setSessionStore($session);
	 }

	/**
	 * Determine if the session store has been set.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function hasSessionStore(){
		return static::$root->hasSessionStore();
	 }

	/**
	 * Constructor.
	 *
	 * @param array $query The GET parameters
	 * @param array $request The POST parameters
	 * @param array $attributes The request attributes (parameters parsed from the PATH_INFO, ...)
	 * @param array $cookies The COOKIE parameters
	 * @param array $files The FILES parameters
	 * @param array $server The SERVER parameters
	 * @param string $content The raw body data
	 * @api 
	 * @static 
	 */
	 public static function __construct($query = array(), $request = array(), $attributes = array(), $cookies = array(), $files = array(), $server = array(), $content = null){
		 static::$root->__construct($query, $request, $attributes, $cookies, $files, $server, $content);
	 }

	/**
	 * Sets the parameters for this request.
	 * 
	 * This method also re-initializes all properties.
	 *
	 * @param array $query The GET parameters
	 * @param array $request The POST parameters
	 * @param array $attributes The request attributes (parameters parsed from the PATH_INFO, ...)
	 * @param array $cookies The COOKIE parameters
	 * @param array $files The FILES parameters
	 * @param array $server The SERVER parameters
	 * @param string $content The raw body data
	 * @api 
	 * @static 
	 */
	 public static function initialize($query = array(), $request = array(), $attributes = array(), $cookies = array(), $files = array(), $server = array(), $content = null){
		 static::$root->initialize($query, $request, $attributes, $cookies, $files, $server, $content);
	 }

	/**
	 * Creates a new request with values from PHP's super globals.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request A new request
	 * @api 
	 * @static 
	 */
	 public static function createFromGlobals(){
		return static::$root->createFromGlobals();
	 }

	/**
	 * Creates a Request based on a given URI and configuration.
	 * 
	 * The information contained in the URI always take precedence
	 * over the other information (server and parameters).
	 *
	 * @param string $uri The URI
	 * @param string $method The HTTP method
	 * @param array $parameters The query (GET) or request (POST) parameters
	 * @param array $cookies The request cookies ($_COOKIE)
	 * @param array $files The request files ($_FILES)
	 * @param array $server The server parameters ($_SERVER)
	 * @param string $content The raw body data
	 * @return \Symfony\Component\HttpFoundation\Request A Request instance
	 * @api 
	 * @static 
	 */
	 public static function create($uri, $method = 'GET', $parameters = array(), $cookies = array(), $files = array(), $server = array(), $content = null){
		return static::$root->create($uri, $method, $parameters, $cookies, $files, $server, $content);
	 }

	/**
	 * Clones a request and overrides some of its parameters.
	 *
	 * @param array $query The GET parameters
	 * @param array $request The POST parameters
	 * @param array $attributes The request attributes (parameters parsed from the PATH_INFO, ...)
	 * @param array $cookies The COOKIE parameters
	 * @param array $files The FILES parameters
	 * @param array $server The SERVER parameters
	 * @return \Symfony\Component\HttpFoundation\Request The duplicated request
	 * @api 
	 * @static 
	 */
	 public static function duplicate($query = null, $request = null, $attributes = null, $cookies = null, $files = null, $server = null){
		return static::$root->duplicate($query, $request, $attributes, $cookies, $files, $server);
	 }

	/**
	 * Returns the request as a string.
	 *
	 * @return string The request
	 * @static 
	 */
	 public static function __toString(){
		return static::$root->__toString();
	 }

	/**
	 * Overrides the PHP global variables according to this request instance.
	 * 
	 * It overrides $_GET, $_POST, $_REQUEST, $_SERVER, $_COOKIE.
	 * $_FILES is never override, see rfc1867
	 *
	 * @api 
	 * @static 
	 */
	 public static function overrideGlobals(){
		 static::$root->overrideGlobals();
	 }

	/**
	 * Sets a list of trusted proxies.
	 * 
	 * You should only list the reverse proxies that you manage directly.
	 *
	 * @param array $proxies A list of trusted proxies
	 * @api 
	 * @static 
	 */
	 public static function setTrustedProxies($proxies){
		 static::$root->setTrustedProxies($proxies);
	 }

	/**
	 * Gets the list of trusted proxies.
	 *
	 * @return array An array of trusted proxies.
	 * @static 
	 */
	 public static function getTrustedProxies(){
		return static::$root->getTrustedProxies();
	 }

	/**
	 * Sets the name for trusted headers.
	 * 
	 * The following header keys are supported:
	 * 
	 *  * Request::HEADER_CLIENT_IP:    defaults to X-Forwarded-For   (see getClientIp())
	 *  * Request::HEADER_CLIENT_HOST:  defaults to X-Forwarded-Host  (see getClientHost())
	 *  * Request::HEADER_CLIENT_PORT:  defaults to X-Forwarded-Port  (see getClientPort())
	 *  * Request::HEADER_CLIENT_PROTO: defaults to X-Forwarded-Proto (see getScheme() and isSecure())
	 * 
	 * Setting an empty value allows to disable the trusted header for the given key.
	 *
	 * @param string $key The header key
	 * @param string $value The header name
	 * @throws \InvalidArgumentException
	 * @static 
	 */
	 public static function setTrustedHeaderName($key, $value){
		 static::$root->setTrustedHeaderName($key, $value);
	 }

	/**
	 * Gets the trusted proxy header name.
	 *
	 * @param string $key The header key
	 * @return string The header name
	 * @throws \InvalidArgumentException
	 * @static 
	 */
	 public static function getTrustedHeaderName($key){
		return static::$root->getTrustedHeaderName($key);
	 }

	/**
	 * Normalizes a query string.
	 * 
	 * It builds a normalized query string, where keys/value pairs are alphabetized,
	 * have consistent escaping and unneeded delimiters are removed.
	 *
	 * @param string $qs Query string
	 * @return string A normalized query string for the Request
	 * @static 
	 */
	 public static function normalizeQueryString($qs){
		return static::$root->normalizeQueryString($qs);
	 }

	/**
	 * Enables support for the _method request parameter to determine the intended HTTP method.
	 * 
	 * Be warned that enabling this feature might lead to CSRF issues in your code.
	 * Check that you are using CSRF tokens when required.
	 * 
	 * The HTTP method can only be overridden when the real HTTP method is POST.
	 *
	 * @static 
	 */
	 public static function enableHttpMethodParameterOverride(){
		 static::$root->enableHttpMethodParameterOverride();
	 }

	/**
	 * Checks whether support for the _method request parameter is enabled.
	 *
	 * @return Boolean True when the _method request parameter is enabled, false otherwise
	 * @static 
	 */
	 public static function getHttpMethodParameterOverride(){
		return static::$root->getHttpMethodParameterOverride();
	 }

	/**
	 * Gets a "parameter" value.
	 * 
	 * This method is mainly useful for libraries that want to provide some flexibility.
	 * 
	 * Order of precedence: GET, PATH, POST
	 * 
	 * Avoid using this method in controllers:
	 * 
	 *  * slow
	 *  * prefer to get from a "named" source
	 * 
	 * It is better to explicitly get request parameters from the appropriate
	 * public property instead (query, attributes, request).
	 *
	 * @param string $key the key
	 * @param mixed $default the default value
	 * @param Boolean $deep is parameter deep in multidimensional array
	 * @return mixed 
	 * @static 
	 */
	 public static function get($key, $default = null, $deep = false){
		return static::$root->get($key, $default, $deep);
	 }

	/**
	 * Gets the Session.
	 *
	 * @return \Symfony\Component\HttpFoundation\SessionInterface|null The session
	 * @api 
	 * @static 
	 */
	 public static function getSession(){
		return static::$root->getSession();
	 }

	/**
	 * Whether the request contains a Session which was started in one of the
	 * previous requests.
	 *
	 * @return Boolean 
	 * @api 
	 * @static 
	 */
	 public static function hasPreviousSession(){
		return static::$root->hasPreviousSession();
	 }

	/**
	 * Whether the request contains a Session object.
	 * 
	 * This method does not give any information about the state of the session object,
	 * like whether the session is started or not. It is just a way to check if this Request
	 * is associated with a Session instance.
	 *
	 * @return Boolean true when the Request contains a Session object, false otherwise
	 * @api 
	 * @static 
	 */
	 public static function hasSession(){
		return static::$root->hasSession();
	 }

	/**
	 * Sets the Session.
	 *
	 * @param \Symfony\Component\HttpFoundation\SessionInterface $session The Session
	 * @api 
	 * @static 
	 */
	 public static function setSession($session){
		 static::$root->setSession($session);
	 }

	/**
	 * Returns the client IP addresses.
	 * 
	 * The most trusted IP address is first, and the less trusted one last.
	 * The "real" client IP address is the last one, but this is also the
	 * less trusted one.
	 * 
	 * Use this method carefully; you should use getClientIp() instead.
	 *
	 * @return array The client IP addresses
	 * @see getClientIp()
	 * @static 
	 */
	 public static function getClientIps(){
		return static::$root->getClientIps();
	 }

	/**
	 * Returns the client IP address.
	 * 
	 * This method can read the client IP address from the "X-Forwarded-For" header
	 * when trusted proxies were set via "setTrustedProxies()". The "X-Forwarded-For"
	 * header value is a comma+space separated list of IP addresses, the left-most
	 * being the original client, and each successive proxy that passed the request
	 * adding the IP address where it received the request from.
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-For",
	 * ("Client-Ip" for instance), configure it via "setTrustedHeaderName()" with
	 * the "client-ip" key.
	 *
	 * @return string The client IP address
	 * @see getClientIps()
	 * @see http://en.wikipedia.org/wiki/X-Forwarded-For
	 * @api 
	 * @static 
	 */
	 public static function getClientIp(){
		return static::$root->getClientIp();
	 }

	/**
	 * Returns current script name.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getScriptName(){
		return static::$root->getScriptName();
	 }

	/**
	 * Returns the path being requested relative to the executed script.
	 * 
	 * The path info always starts with a /.
	 * 
	 * Suppose this request is instantiated from /mysite on localhost:
	 * 
	 *  * http://localhost/mysite              returns an empty string
	 *  * http://localhost/mysite/about        returns '/about'
	 *  * http://localhost/mysite/enco%20ded   returns '/enco%20ded'
	 *  * http://localhost/mysite/about?var=1  returns '/about'
	 *
	 * @return string The raw path (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getPathInfo(){
		return static::$root->getPathInfo();
	 }

	/**
	 * Returns the root path from which this request is executed.
	 * 
	 * Suppose that an index.php file instantiates this request object:
	 * 
	 *  * http://localhost/index.php         returns an empty string
	 *  * http://localhost/index.php/page    returns an empty string
	 *  * http://localhost/web/index.php     returns '/web'
	 *  * http://localhost/we%20b/index.php  returns '/we%20b'
	 *
	 * @return string The raw path (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getBasePath(){
		return static::$root->getBasePath();
	 }

	/**
	 * Returns the root url from which this request is executed.
	 * 
	 * The base URL never ends with a /.
	 * 
	 * This is similar to getBasePath(), except that it also includes the
	 * script filename (e.g. index.php) if one exists.
	 *
	 * @return string The raw url (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getBaseUrl(){
		return static::$root->getBaseUrl();
	 }

	/**
	 * Gets the request's scheme.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getScheme(){
		return static::$root->getScheme();
	 }

	/**
	 * Returns the port on which the request is made.
	 * 
	 * This method can read the client port from the "X-Forwarded-Port" header
	 * when trusted proxies were set via "setTrustedProxies()".
	 * 
	 * The "X-Forwarded-Port" header must contain the client port.
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-Port",
	 * configure it via "setTrustedHeaderName()" with the "client-port" key.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getPort(){
		return static::$root->getPort();
	 }

	/**
	 * Returns the user.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function getUser(){
		return static::$root->getUser();
	 }

	/**
	 * Returns the password.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function getPassword(){
		return static::$root->getPassword();
	 }

	/**
	 * Gets the user info.
	 *
	 * @return string A user name and, optionally, scheme-specific information about how to gain authorization to access the server
	 * @static 
	 */
	 public static function getUserInfo(){
		return static::$root->getUserInfo();
	 }

	/**
	 * Returns the HTTP host being requested.
	 * 
	 * The port name will be appended to the host if it's non-standard.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getHttpHost(){
		return static::$root->getHttpHost();
	 }

	/**
	 * Returns the requested URI.
	 *
	 * @return string The raw URI (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getRequestUri(){
		return static::$root->getRequestUri();
	 }

	/**
	 * Gets the scheme and HTTP host.
	 * 
	 * If the URL was called with basic authentication, the user
	 * and the password are not added to the generated string.
	 *
	 * @return string The scheme and HTTP host
	 * @static 
	 */
	 public static function getSchemeAndHttpHost(){
		return static::$root->getSchemeAndHttpHost();
	 }

	/**
	 * Generates a normalized URI for the Request.
	 *
	 * @return string A normalized URI for the Request
	 * @see getQueryString()
	 * @api 
	 * @static 
	 */
	 public static function getUri(){
		return static::$root->getUri();
	 }

	/**
	 * Generates a normalized URI for the given path.
	 *
	 * @param string $path A path to use instead of the current one
	 * @return string The normalized URI for the path
	 * @api 
	 * @static 
	 */
	 public static function getUriForPath($path){
		return static::$root->getUriForPath($path);
	 }

	/**
	 * Generates the normalized query string for the Request.
	 * 
	 * It builds a normalized query string, where keys/value pairs are alphabetized
	 * and have consistent escaping.
	 *
	 * @return string|null A normalized query string for the Request
	 * @api 
	 * @static 
	 */
	 public static function getQueryString(){
		return static::$root->getQueryString();
	 }

	/**
	 * Checks whether the request is secure or not.
	 * 
	 * This method can read the client port from the "X-Forwarded-Proto" header
	 * when trusted proxies were set via "setTrustedProxies()".
	 * 
	 * The "X-Forwarded-Proto" header must contain the protocol: "https" or "http".
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-Proto"
	 * ("SSL_HTTPS" for instance), configure it via "setTrustedHeaderName()" with
	 * the "client-proto" key.
	 *
	 * @return Boolean 
	 * @api 
	 * @static 
	 */
	 public static function isSecure(){
		return static::$root->isSecure();
	 }

	/**
	 * Returns the host name.
	 * 
	 * This method can read the client port from the "X-Forwarded-Host" header
	 * when trusted proxies were set via "setTrustedProxies()".
	 * 
	 * The "X-Forwarded-Host" header must contain the client host name.
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-Host",
	 * configure it via "setTrustedHeaderName()" with the "client-host" key.
	 *
	 * @return string 
	 * @throws \UnexpectedValueException when the host name is invalid
	 * @api 
	 * @static 
	 */
	 public static function getHost(){
		return static::$root->getHost();
	 }

	/**
	 * Sets the request method.
	 *
	 * @param string $method 
	 * @api 
	 * @static 
	 */
	 public static function setMethod($method){
		 static::$root->setMethod($method);
	 }

	/**
	 * Gets the request "intended" method.
	 * 
	 * If the X-HTTP-Method-Override header is set, and if the method is a POST,
	 * then it is used to determine the "real" intended HTTP method.
	 * 
	 * The _method request parameter can also be used to determine the HTTP method,
	 * but only if enableHttpMethodParameterOverride() has been called.
	 * 
	 * The method is always an uppercased string.
	 *
	 * @return string The request method
	 * @api 
	 * @see getRealMethod
	 * @static 
	 */
	 public static function getMethod(){
		return static::$root->getMethod();
	 }

	/**
	 * Gets the "real" request method.
	 *
	 * @return string The request method
	 * @see getMethod
	 * @static 
	 */
	 public static function getRealMethod(){
		return static::$root->getRealMethod();
	 }

	/**
	 * Gets the mime type associated with the format.
	 *
	 * @param string $format The format
	 * @return string The associated mime type (null if not found)
	 * @api 
	 * @static 
	 */
	 public static function getMimeType($format){
		return static::$root->getMimeType($format);
	 }

	/**
	 * Gets the format associated with the mime type.
	 *
	 * @param string $mimeType The associated mime type
	 * @return string|null The format (null if not found)
	 * @api 
	 * @static 
	 */
	 public static function getFormat($mimeType){
		return static::$root->getFormat($mimeType);
	 }

	/**
	 * Associates a format with mime types.
	 *
	 * @param string $format The format
	 * @param string|array $mimeTypes The associated mime types (the preferred one must be the first as it will be used as the content type)
	 * @api 
	 * @static 
	 */
	 public static function setFormat($format, $mimeTypes){
		 static::$root->setFormat($format, $mimeTypes);
	 }

	/**
	 * Gets the request format.
	 * 
	 * Here is the process to determine the format:
	 * 
	 *  * format defined by the user (with setRequestFormat())
	 *  * _format request parameter
	 *  * $default
	 *
	 * @param string $default The default format
	 * @return string The request format
	 * @api 
	 * @static 
	 */
	 public static function getRequestFormat($default = 'html'){
		return static::$root->getRequestFormat($default);
	 }

	/**
	 * Sets the request format.
	 *
	 * @param string $format The request format.
	 * @api 
	 * @static 
	 */
	 public static function setRequestFormat($format){
		 static::$root->setRequestFormat($format);
	 }

	/**
	 * Gets the format associated with the request.
	 *
	 * @return string|null The format (null if no content type is present)
	 * @api 
	 * @static 
	 */
	 public static function getContentType(){
		return static::$root->getContentType();
	 }

	/**
	 * Sets the default locale.
	 *
	 * @param string $locale 
	 * @api 
	 * @static 
	 */
	 public static function setDefaultLocale($locale){
		 static::$root->setDefaultLocale($locale);
	 }

	/**
	 * Sets the locale.
	 *
	 * @param string $locale 
	 * @api 
	 * @static 
	 */
	 public static function setLocale($locale){
		 static::$root->setLocale($locale);
	 }

	/**
	 * Get the locale.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getLocale(){
		return static::$root->getLocale();
	 }

	/**
	 * Checks if the request method is of specified type.
	 *
	 * @param string $method Uppercase request method (GET, POST etc).
	 * @return Boolean 
	 * @static 
	 */
	 public static function isMethod($method){
		return static::$root->isMethod($method);
	 }

	/**
	 * Checks whether the method is safe or not.
	 *
	 * @return Boolean 
	 * @api 
	 * @static 
	 */
	 public static function isMethodSafe(){
		return static::$root->isMethodSafe();
	 }

	/**
	 * Returns the request body content.
	 *
	 * @param Boolean $asResource If true, a resource will be returned
	 * @return string|resource The request body content or a resource to read the body stream.
	 * @throws \LogicException
	 * @static 
	 */
	 public static function getContent($asResource = false){
		return static::$root->getContent($asResource);
	 }

	/**
	 * Gets the Etags.
	 *
	 * @return array The entity tags
	 * @static 
	 */
	 public static function getETags(){
		return static::$root->getETags();
	 }

	/**
	 * 
	 *
	 * @return Boolean 
	 * @static 
	 */
	 public static function isNoCache(){
		return static::$root->isNoCache();
	 }

	/**
	 * Returns the preferred language.
	 *
	 * @param array $locales An array of ordered available locales
	 * @return string|null The preferred locale
	 * @api 
	 * @static 
	 */
	 public static function getPreferredLanguage($locales = null){
		return static::$root->getPreferredLanguage($locales);
	 }

	/**
	 * Gets a list of languages acceptable by the client browser.
	 *
	 * @return array Languages ordered in the user browser preferences
	 * @api 
	 * @static 
	 */
	 public static function getLanguages(){
		return static::$root->getLanguages();
	 }

	/**
	 * Gets a list of charsets acceptable by the client browser.
	 *
	 * @return array List of charsets in preferable order
	 * @api 
	 * @static 
	 */
	 public static function getCharsets(){
		return static::$root->getCharsets();
	 }

	/**
	 * Gets a list of content types acceptable by the client browser
	 *
	 * @return array List of content types in preferable order
	 * @api 
	 * @static 
	 */
	 public static function getAcceptableContentTypes(){
		return static::$root->getAcceptableContentTypes();
	 }

	/**
	 * Returns true if the request is a XMLHttpRequest.
	 * 
	 * It works if your JavaScript library set an X-Requested-With HTTP header.
	 * It is known to work with common JavaScript frameworks:
	 *
	 * @link http://en.wikipedia.org/wiki/List_of_Ajax_frameworks#JavaScript
	 * @return Boolean true if the request is an XMLHttpRequest, false otherwise
	 * @api 
	 * @static 
	 */
	 public static function isXmlHttpRequest(){
		return static::$root->isXmlHttpRequest();
	 }

 }
}

namespace  {
 class Lang extends Illuminate\Support\Facades\Lang{
	/**
	 * @var \Illuminate\Translation\Translator $root
	 */
	 static private $root;

	/**
	 * Create a new translator instance.
	 *
	 * @param \Illuminate\Translation\LoaderInterface $loader 
	 * @param string $locale 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($loader, $locale){
		 static::$root->__construct($loader, $locale);
	 }

	/**
	 * Determine if a translation exists.
	 *
	 * @param string $key 
	 * @param string $locale 
	 * @return bool 
	 * @static 
	 */
	 public static function has($key, $locale = null){
		return static::$root->has($key, $locale);
	 }

	/**
	 * Get the translation for the given key.
	 *
	 * @param string $key 
	 * @param array $replace 
	 * @param string $locale 
	 * @return string 
	 * @static 
	 */
	 public static function get($key, $replace = array(), $locale = null){
		return static::$root->get($key, $replace, $locale);
	 }

	/**
	 * Get a translation according to an integer value.
	 *
	 * @param string $key 
	 * @param int $number 
	 * @param array $replace 
	 * @param string $locale 
	 * @return string 
	 * @static 
	 */
	 public static function choice($key, $number, $replace = array(), $locale = null){
		return static::$root->choice($key, $number, $replace, $locale);
	 }

	/**
	 * Get the translation for a given key.
	 *
	 * @param string $id 
	 * @param array $parameters 
	 * @param string $domain 
	 * @param string $locale 
	 * @return string 
	 * @static 
	 */
	 public static function trans($id, $parameters = array(), $domain = 'messages', $locale = null){
		return static::$root->trans($id, $parameters, $domain, $locale);
	 }

	/**
	 * Get a translation according to an integer value.
	 *
	 * @param string $id 
	 * @param int $number 
	 * @param array $parameters 
	 * @param string $domain 
	 * @param string $locale 
	 * @return string 
	 * @static 
	 */
	 public static function transChoice($id, $number, $parameters = array(), $domain = 'messages', $locale = null){
		return static::$root->transChoice($id, $number, $parameters, $domain, $locale);
	 }

	/**
	 * Load the specified language group.
	 *
	 * @param string $namespace 
	 * @param string $group 
	 * @param string $locale 
	 * @return string 
	 * @static 
	 */
	 public static function load($namespace, $group, $locale){
		return static::$root->load($namespace, $group, $locale);
	 }

	/**
	 * Add a new namespace to the loader.
	 *
	 * @param string $namespace 
	 * @param string $hint 
	 * @return void 
	 * @static 
	 */
	 public static function addNamespace($namespace, $hint){
		 static::$root->addNamespace($namespace, $hint);
	 }

	/**
	 * Parse a key into namespace, group, and item.
	 *
	 * @param string $key 
	 * @return array 
	 * @static 
	 */
	 public static function parseKey($key){
		return static::$root->parseKey($key);
	 }

	/**
	 * Get the message selector instance.
	 *
	 * @return \Symfony\Component\Translation\MessageSelector 
	 * @static 
	 */
	 public static function getSelector(){
		return static::$root->getSelector();
	 }

	/**
	 * Set the message selector instance.
	 *
	 * @param \Symfony\Component\Translation\MessageSelector $selector 
	 * @return void 
	 * @static 
	 */
	 public static function setSelector($selector){
		 static::$root->setSelector($selector);
	 }

	/**
	 * Get the language line loader implementation.
	 *
	 * @return \Illuminate\Translation\LoaderInterface 
	 * @static 
	 */
	 public static function getLoader(){
		return static::$root->getLoader();
	 }

	/**
	 * Get the default locale being used.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function locale(){
		return static::$root->locale();
	 }

	/**
	 * Get the default locale being used.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getLocale(){
		return static::$root->getLocale();
	 }

	/**
	 * Set the default locale.
	 *
	 * @param string $locale 
	 * @return void 
	 * @static 
	 */
	 public static function setLocale($locale){
		 static::$root->setLocale($locale);
	 }

	/**
	 * Set the parsed value of a key.
	 *
	 * @param string $key 
	 * @param array $parsed 
	 * @return void 
	 * @static 
	 */
	 public static function setParsedKey($key, $parsed){
		 static::$root->setParsedKey($key, $parsed);
	 }

 }
}

namespace  {
 class Log extends Illuminate\Support\Facades\Log{
	/**
	 * @var \Illuminate\Log\Writer $root
	 */
	 static private $root;

	/**
	 * Create a new log writer instance.
	 *
	 * @param \Monolog\Logger $monolog 
	 * @param \Illuminate\Events\Dispatcher $dispatcher 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($monolog, $dispatcher = null){
		 static::$root->__construct($monolog, $dispatcher);
	 }

	/**
	 * Register a file log handler.
	 *
	 * @param string $path 
	 * @param string $level 
	 * @return void 
	 * @static 
	 */
	 public static function useFiles($path, $level = 'debug'){
		 static::$root->useFiles($path, $level);
	 }

	/**
	 * Register a daily file log handler.
	 *
	 * @param string $path 
	 * @param int $days 
	 * @param string $level 
	 * @return void 
	 * @static 
	 */
	 public static function useDailyFiles($path, $days = 0, $level = 'debug'){
		 static::$root->useDailyFiles($path, $days, $level);
	 }

	/**
	 * Get the underlying Monolog instance.
	 *
	 * @return \Monolog\Logger 
	 * @static 
	 */
	 public static function getMonolog(){
		return static::$root->getMonolog();
	 }

	/**
	 * Register a new callback handler for when
	 * a log event is triggered.
	 *
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function listen($callback){
		 static::$root->listen($callback);
	 }

	/**
	 * Get the event dispatcher instance.
	 *
	 * @return \Illuminate\Events\Dispatcher 
	 * @static 
	 */
	 public static function getEventDispatcher(){
		return static::$root->getEventDispatcher();
	 }

	/**
	 * Set the event dispatcher instance.
	 *
	 * @param \Illuminate\Events\Dispatcher  
	 * @return void 
	 * @static 
	 */
	 public static function setEventDispatcher($dispatcher){
		 static::$root->setEventDispatcher($dispatcher);
	 }

	/**
	 * Dynamically handle error additions.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

 }
}

namespace  {
 class Mail extends Illuminate\Support\Facades\Mail{
	/**
	 * @var \Illuminate\Mail\Mailer $root
	 */
	 static private $root;

	/**
	 * Create a new Mailer instance.
	 *
	 * @param \Illuminate\View\Environment $views 
	 * @param \Illuminate\Mail\Swift_Mailer $swift 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($views, $swift){
		 static::$root->__construct($views, $swift);
	 }

	/**
	 * Set the global from address and name.
	 *
	 * @param string $address 
	 * @param string $name 
	 * @return void 
	 * @static 
	 */
	 public static function alwaysFrom($address, $name = null){
		 static::$root->alwaysFrom($address, $name);
	 }

	/**
	 * Send a new message when only a plain part.
	 *
	 * @param string $view 
	 * @param array $data 
	 * @param mixed $callback 
	 * @return void 
	 * @static 
	 */
	 public static function plain($view, $data, $callback){
		 static::$root->plain($view, $data, $callback);
	 }

	/**
	 * Send a new message using a view.
	 *
	 * @param string|array $view 
	 * @param array $data 
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function send($view, $data, $callback){
		 static::$root->send($view, $data, $callback);
	 }

	/**
	 * Queue a new e-mail message for sending.
	 *
	 * @param string|array $view 
	 * @param array $data 
	 * @param \Closure|string $callback 
	 * @param string $queue 
	 * @return void 
	 * @static 
	 */
	 public static function queue($view, $data, $callback, $queue = null){
		 static::$root->queue($view, $data, $callback, $queue);
	 }

	/**
	 * Queue a new e-mail message for sending on the given queue.
	 *
	 * @param string|array $view 
	 * @param array $data 
	 * @param \Closure|string $callback 
	 * @param string $queue 
	 * @return void 
	 * @static 
	 */
	 public static function queueOn($queue, $view, $data, $callback){
		 static::$root->queueOn($queue, $view, $data, $callback);
	 }

	/**
	 * Queue a new e-mail message for sending after (n) seconds.
	 *
	 * @param int $delay 
	 * @param string|array $view 
	 * @param array $data 
	 * @param \Closure|string $callback 
	 * @param string $queue 
	 * @return void 
	 * @static 
	 */
	 public static function later($delay, $view, $data, $callback, $queue = null){
		 static::$root->later($delay, $view, $data, $callback, $queue);
	 }

	/**
	 * Queue a new e-mail message for sending after (n) seconds on the given queue.
	 *
	 * @param string $queue 
	 * @param int $delay 
	 * @param string|array $view 
	 * @param array $data 
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function laterOn($queue, $delay, $view, $data, $callback){
		 static::$root->laterOn($queue, $delay, $view, $data, $callback);
	 }

	/**
	 * Handle a queued e-mail message job.
	 *
	 * @param \Illuminate\Queue\Jobs\Job $job 
	 * @param array $data 
	 * @return void 
	 * @static 
	 */
	 public static function handleQueuedMessage($job, $data){
		 static::$root->handleQueuedMessage($job, $data);
	 }

	/**
	 * Tell the mailer to not really send messages.
	 *
	 * @param bool $value 
	 * @return void 
	 * @static 
	 */
	 public static function pretend($value = true){
		 static::$root->pretend($value);
	 }

	/**
	 * Get the view environment instance.
	 *
	 * @return \Illuminate\View\Environment 
	 * @static 
	 */
	 public static function getViewEnvironment(){
		return static::$root->getViewEnvironment();
	 }

	/**
	 * Get the Swift Mailer instance.
	 *
	 * @return \Illuminate\Mail\Swift_Mailer 
	 * @static 
	 */
	 public static function getSwiftMailer(){
		return static::$root->getSwiftMailer();
	 }

	/**
	 * Set the Swift Mailer instance.
	 *
	 * @param \Illuminate\Mail\Swift_Mailer $swift 
	 * @return void 
	 * @static 
	 */
	 public static function setSwiftMailer($swift){
		 static::$root->setSwiftMailer($swift);
	 }

	/**
	 * Set the log writer instance.
	 *
	 * @param \Illuminate\Log\Writer $logger 
	 * @return \Illuminate\Mail\Mailer 
	 * @static 
	 */
	 public static function setLogger($logger){
		return static::$root->setLogger($logger);
	 }

	/**
	 * Set the queue manager instance.
	 *
	 * @param \Illuminate\Queue\QueueManager $queue 
	 * @return \Illuminate\Mail\Mailer 
	 * @static 
	 */
	 public static function setQueue($queue){
		return static::$root->setQueue($queue);
	 }

	/**
	 * Set the IoC container instance.
	 *
	 * @param \Illuminate\Container\Container $container 
	 * @return void 
	 * @static 
	 */
	 public static function setContainer($container){
		 static::$root->setContainer($container);
	 }

 }
}

namespace  {
 class Paginator extends Illuminate\Support\Facades\Paginator{
	/**
	 * @var \Illuminate\Pagination\Environment $root
	 */
	 static private $root;

	/**
	 * Create a new pagination environment.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @param \Illuminate\View\Environment $view 
	 * @param \Symfony\Component\Translation\TranslatorInterface $trans 
	 * @param string $pageName 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($request, $view, $trans, $pageName = 'page'){
		 static::$root->__construct($request, $view, $trans, $pageName);
	 }

	/**
	 * Get a new paginator instance.
	 *
	 * @param array $items 
	 * @param int $perPage 
	 * @param int $total 
	 * @return \Illuminate\Pagination\Paginator 
	 * @static 
	 */
	 public static function make($items, $total, $perPage){
		return static::$root->make($items, $total, $perPage);
	 }

	/**
	 * Get the pagination view.
	 *
	 * @param \Illuminate\Pagination\Paginator $paginator 
	 * @return \Illuminate\View\View 
	 * @static 
	 */
	 public static function getPaginationView($paginator){
		return static::$root->getPaginationView($paginator);
	 }

	/**
	 * Get the number of the current page.
	 *
	 * @return int 
	 * @static 
	 */
	 public static function getCurrentPage(){
		return static::$root->getCurrentPage();
	 }

	/**
	 * Set the number of the current page.
	 *
	 * @param int $number 
	 * @return void 
	 * @static 
	 */
	 public static function setCurrentPage($number){
		 static::$root->setCurrentPage($number);
	 }

	/**
	 * Get the root URL for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getCurrentUrl(){
		return static::$root->getCurrentUrl();
	 }

	/**
	 * Set the base URL in use by the paginator.
	 *
	 * @param string $baseUrl 
	 * @return void 
	 * @static 
	 */
	 public static function setBaseUrl($baseUrl){
		 static::$root->setBaseUrl($baseUrl);
	 }

	/**
	 * Set the input page parameter name used by the paginator.
	 *
	 * @param string $pageName 
	 * @return void 
	 * @static 
	 */
	 public static function setPageName($pageName){
		 static::$root->setPageName($pageName);
	 }

	/**
	 * Get the input page parameter name used by the paginator.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getPageName(){
		return static::$root->getPageName();
	 }

	/**
	 * Get the name of the pagination view.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getViewName(){
		return static::$root->getViewName();
	 }

	/**
	 * Set the name of the pagination view.
	 *
	 * @param string $viewName 
	 * @return void 
	 * @static 
	 */
	 public static function setViewName($viewName){
		 static::$root->setViewName($viewName);
	 }

	/**
	 * Get the locale of the paginator.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getLocale(){
		return static::$root->getLocale();
	 }

	/**
	 * Set the locale of the paginator.
	 *
	 * @param string $locale 
	 * @return void 
	 * @static 
	 */
	 public static function setLocale($locale){
		 static::$root->setLocale($locale);
	 }

	/**
	 * Get the active request instance.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request 
	 * @static 
	 */
	 public static function getRequest(){
		return static::$root->getRequest();
	 }

	/**
	 * Set the active request instance.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @return void 
	 * @static 
	 */
	 public static function setRequest($request){
		 static::$root->setRequest($request);
	 }

	/**
	 * Get the current view driver.
	 *
	 * @return \Illuminate\View\Environment 
	 * @static 
	 */
	 public static function getViewDriver(){
		return static::$root->getViewDriver();
	 }

	/**
	 * Set the current view driver.
	 *
	 * @param \Illuminate\View\Environment $view 
	 * @return void 
	 * @static 
	 */
	 public static function setViewDriver($view){
		 static::$root->setViewDriver($view);
	 }

	/**
	 * Get the translator instance.
	 *
	 * @return \Symfony\Component\Translation\TranslatorInterface 
	 * @static 
	 */
	 public static function getTranslator(){
		return static::$root->getTranslator();
	 }

 }
}

namespace  {
 class Queue extends Illuminate\Support\Facades\Queue{
	/**
	 * @var \Illuminate\Queue\QueueManager $root
	 */
	 static private $root;

	/**
	 * Create a new queue manager instance.
	 *
	 * @param \Illuminate\Foundation\Application $app 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($app){
		 static::$root->__construct($app);
	 }

	/**
	 * Resolve a queue connection instance.
	 *
	 * @param string $name 
	 * @return \Illuminate\Queue\QueueInterface 
	 * @static 
	 */
	 public static function connection($name = null){
		return static::$root->connection($name);
	 }

	/**
	 * Add a queue connection resolver.
	 *
	 * @param string $driver 
	 * @param \Closure $resolver 
	 * @return void 
	 * @static 
	 */
	 public static function addConnector($driver, $resolver){
		 static::$root->addConnector($driver, $resolver);
	 }

	/**
	 * Dynamically pass calls to the default connection.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

	/**
	 * @var \Illuminate\Queue\QueueInterface $root2
	 */
	 static private $root2;

	/**
	 * Push a new job onto the queue.
	 *
	 * @param string $job 
	 * @param mixed $data 
	 * @param string $queue 
	 * @return void 
	 * @static 
	 */
	 public static function push($job, $data = '', $queue = null){
		 static::$root2->push($job, $data, $queue);
	 }

	/**
	 * Push a new job onto the queue after a delay.
	 *
	 * @param int $delay 
	 * @param string $job 
	 * @param mixed $data 
	 * @param string $queue 
	 * @return void 
	 * @static 
	 */
	 public static function later($delay, $job, $data = '', $queue = null){
		 static::$root2->later($delay, $job, $data, $queue);
	 }

	/**
	 * Pop the next job off of the queue.
	 *
	 * @param string $queue 
	 * @return \Illuminate\Queue\Jobs\Job|\Illuminate\Queue\nul 
	 * @static 
	 */
	 public static function pop($queue = null){
		return static::$root2->pop($queue);
	 }

 }
}

namespace  {
 class Redirect extends Illuminate\Support\Facades\Redirect{
	/**
	 * @var \Illuminate\Routing\Redirector $root
	 */
	 static private $root;

	/**
	 * Create a new Redirector instance.
	 *
	 * @param \Illuminate\Routing\UrlGenerator $generator 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($generator){
		 static::$root->__construct($generator);
	 }

	/**
	 * Create a new redirect response to the "home" route.
	 *
	 * @param int $status 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function home($status = 302){
		return static::$root->home($status);
	 }

	/**
	 * Create a new redirect response to the previous location.
	 *
	 * @param int $status 
	 * @param array $headers 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function back($status = 302, $headers = array()){
		return static::$root->back($status, $headers);
	 }

	/**
	 * Create a new redirect response to the current URI.
	 *
	 * @param int $status 
	 * @param array $headers 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function refresh($status = 302, $headers = array()){
		return static::$root->refresh($status, $headers);
	 }

	/**
	 * Create a new redirect response, while putting the current URL in the session.
	 *
	 * @param string $path 
	 * @param int $status 
	 * @param array $headers 
	 * @param bool $secure 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function guest($path, $status = 302, $headers = array(), $secure = null){
		return static::$root->guest($path, $status, $headers, $secure);
	 }

	/**
	 * Create a new redirect response to the previously intended location.
	 *
	 * @param string $default 
	 * @param int $status 
	 * @param array $headers 
	 * @param bool $secure 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function intended($default, $status = 302, $headers = array(), $secure = null){
		return static::$root->intended($default, $status, $headers, $secure);
	 }

	/**
	 * Create a new redirect response to the given path.
	 *
	 * @param string $path 
	 * @param int $status 
	 * @param array $headers 
	 * @param bool $secure 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function to($path, $status = 302, $headers = array(), $secure = null){
		return static::$root->to($path, $status, $headers, $secure);
	 }

	/**
	 * Create a new redirect response to the given HTTPS path.
	 *
	 * @param string $path 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function secure($path, $status = 302, $headers = array()){
		return static::$root->secure($path, $status, $headers);
	 }

	/**
	 * Create a new redirect response to a named route.
	 *
	 * @param string $route 
	 * @param array $parameters 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function route($route, $parameters = array(), $status = 302, $headers = array()){
		return static::$root->route($route, $parameters, $status, $headers);
	 }

	/**
	 * Create a new redirect response to a controller action.
	 *
	 * @param string $action 
	 * @param array $parameters 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Illuminate\Http\RedirectResponse 
	 * @static 
	 */
	 public static function action($action, $parameters = array(), $status = 302, $headers = array()){
		return static::$root->action($action, $parameters, $status, $headers);
	 }

	/**
	 * Get the URL generator instance.
	 *
	 * @return \Illuminate\Routing\UrlGenerator 
	 * @static 
	 */
	 public static function getUrlGenerator(){
		return static::$root->getUrlGenerator();
	 }

	/**
	 * Set the active session store.
	 *
	 * @param \Illuminate\Session\Store $session 
	 * @return void 
	 * @static 
	 */
	 public static function setSession($session){
		 static::$root->setSession($session);
	 }

 }
}

namespace  {
 class Redis extends Illuminate\Support\Facades\Redis{
	/**
	 * @var \Illuminate\Redis\Database $root
	 */
	 static private $root;

	/**
	 * Create a new Redis connection instance.
	 *
	 * @param array $servers 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($servers = array()){
		 static::$root->__construct($servers);
	 }

	/**
	 * Get a specific Redis connection instance.
	 *
	 * @param string $name 
	 * @return \Predis\Connection\SingleConnectionInterface 
	 * @static 
	 */
	 public static function connection($name = 'default'){
		return static::$root->connection($name);
	 }

	/**
	 * Run a command against the Redis database.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function command($method, $parameters = array()){
		return static::$root->command($method, $parameters);
	 }

	/**
	 * Dynamically make a Redis command.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __call($method, $parameters){
		return static::$root->__call($method, $parameters);
	 }

 }
}

namespace  {
 class Request extends Illuminate\Support\Facades\Request{
	/**
	 * @var \Illuminate\Http\Request $root
	 */
	 static private $root;

	/**
	 * Return the Request instance.
	 *
	 * @return \Illuminate\Http\Request 
	 * @static 
	 */
	 public static function instance(){
		return static::$root->instance();
	 }

	/**
	 * Get the root URL for the application.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function root(){
		return static::$root->root();
	 }

	/**
	 * Get the URL (no query string) for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function url(){
		return static::$root->url();
	 }

	/**
	 * Get the full URL for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function fullUrl(){
		return static::$root->fullUrl();
	 }

	/**
	 * Get the current path info for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function path(){
		return static::$root->path();
	 }

	/**
	 * Get a segment from the URI (1 based index).
	 *
	 * @param string $index 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function segment($index, $default = null){
		return static::$root->segment($index, $default);
	 }

	/**
	 * Get all of the segments for the request path.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function segments(){
		return static::$root->segments();
	 }

	/**
	 * Determine if the current request URI matches a pattern.
	 *
	 * @param string $pattern 
	 * @return bool 
	 * @static 
	 */
	 public static function is($pattern){
		return static::$root->is($pattern);
	 }

	/**
	 * Determine if the request is the result of an AJAX call.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function ajax(){
		return static::$root->ajax();
	 }

	/**
	 * Determine if the request is over HTTPS.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function secure(){
		return static::$root->secure();
	 }

	/**
	 * Determine if the request contains a given input item.
	 *
	 * @param string|array $key 
	 * @return bool 
	 * @static 
	 */
	 public static function has($key){
		return static::$root->has($key);
	 }

	/**
	 * Get all of the input and files for the request.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function all(){
		return static::$root->all();
	 }

	/**
	 * Retrieve an input item from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function input($key = null, $default = null){
		return static::$root->input($key, $default);
	 }

	/**
	 * Get a subset of the items from the input data.
	 *
	 * @param array $keys 
	 * @return array 
	 * @static 
	 */
	 public static function only($keys){
		return static::$root->only($keys);
	 }

	/**
	 * Get all of the input except for a specified array of items.
	 *
	 * @param array $keys 
	 * @return array 
	 * @static 
	 */
	 public static function except($keys){
		return static::$root->except($keys);
	 }

	/**
	 * Retrieve a query string item from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function query($key = null, $default = null){
		return static::$root->query($key, $default);
	 }

	/**
	 * Retrieve a cookie from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function cookie($key = null, $default = null){
		return static::$root->cookie($key, $default);
	 }

	/**
	 * Retrieve a file from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return \Symfony\Component\HttpFoundation\File\UploadedFile 
	 * @static 
	 */
	 public static function file($key = null, $default = null){
		return static::$root->file($key, $default);
	 }

	/**
	 * Determine if the uploaded data contains a file.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasFile($key){
		return static::$root->hasFile($key);
	 }

	/**
	 * Retrieve a header from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function header($key = null, $default = null){
		return static::$root->header($key, $default);
	 }

	/**
	 * Retrieve a server variable from the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return string 
	 * @static 
	 */
	 public static function server($key = null, $default = null){
		return static::$root->server($key, $default);
	 }

	/**
	 * Retrieve an old input item.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function old($key = null, $default = null){
		return static::$root->old($key, $default);
	 }

	/**
	 * Flash the input for the current request to the session.
	 *
	 * @param string $filter 
	 * @param array $keys 
	 * @return void 
	 * @static 
	 */
	 public static function flash($filter = null, $keys = array()){
		 static::$root->flash($filter, $keys);
	 }

	/**
	 * Flash only some of the input to the session.
	 *
	 * @param \Illuminate\Http\dynamic  string
	 * @return void 
	 * @static 
	 */
	 public static function flashOnly($keys){
		 static::$root->flashOnly($keys);
	 }

	/**
	 * Flash only some of the input to the session.
	 *
	 * @param \Illuminate\Http\dynamic  string
	 * @return void 
	 * @static 
	 */
	 public static function flashExcept($keys){
		 static::$root->flashExcept($keys);
	 }

	/**
	 * Flush all of the old input from the session.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flush(){
		 static::$root->flush();
	 }

	/**
	 * Merge new input into the current request's input array.
	 *
	 * @param array $input 
	 * @return void 
	 * @static 
	 */
	 public static function merge($input){
		 static::$root->merge($input);
	 }

	/**
	 * Replace the input for the current request.
	 *
	 * @param array $input 
	 * @return void 
	 * @static 
	 */
	 public static function replace($input){
		 static::$root->replace($input);
	 }

	/**
	 * Get the JSON payload for the request.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function json($key = null, $default = null){
		return static::$root->json($key, $default);
	 }

	/**
	 * Determine if the request is sending JSON.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function isJson(){
		return static::$root->isJson();
	 }

	/**
	 * Determine if the current request is asking for JSON in return.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function wantsJson(){
		return static::$root->wantsJson();
	 }

	/**
	 * Get the Illuminate session store implementation.
	 *
	 * @return \Illuminate\Session\Store 
	 * @static 
	 */
	 public static function getSessionStore(){
		return static::$root->getSessionStore();
	 }

	/**
	 * Set the Illuminate session store implementation.
	 *
	 * @param \Illuminate\Session\Store $session 
	 * @return void 
	 * @static 
	 */
	 public static function setSessionStore($session){
		 static::$root->setSessionStore($session);
	 }

	/**
	 * Determine if the session store has been set.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function hasSessionStore(){
		return static::$root->hasSessionStore();
	 }

	/**
	 * Constructor.
	 *
	 * @param array $query The GET parameters
	 * @param array $request The POST parameters
	 * @param array $attributes The request attributes (parameters parsed from the PATH_INFO, ...)
	 * @param array $cookies The COOKIE parameters
	 * @param array $files The FILES parameters
	 * @param array $server The SERVER parameters
	 * @param string $content The raw body data
	 * @api 
	 * @static 
	 */
	 public static function __construct($query = array(), $request = array(), $attributes = array(), $cookies = array(), $files = array(), $server = array(), $content = null){
		 static::$root->__construct($query, $request, $attributes, $cookies, $files, $server, $content);
	 }

	/**
	 * Sets the parameters for this request.
	 * 
	 * This method also re-initializes all properties.
	 *
	 * @param array $query The GET parameters
	 * @param array $request The POST parameters
	 * @param array $attributes The request attributes (parameters parsed from the PATH_INFO, ...)
	 * @param array $cookies The COOKIE parameters
	 * @param array $files The FILES parameters
	 * @param array $server The SERVER parameters
	 * @param string $content The raw body data
	 * @api 
	 * @static 
	 */
	 public static function initialize($query = array(), $request = array(), $attributes = array(), $cookies = array(), $files = array(), $server = array(), $content = null){
		 static::$root->initialize($query, $request, $attributes, $cookies, $files, $server, $content);
	 }

	/**
	 * Creates a new request with values from PHP's super globals.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request A new request
	 * @api 
	 * @static 
	 */
	 public static function createFromGlobals(){
		return static::$root->createFromGlobals();
	 }

	/**
	 * Creates a Request based on a given URI and configuration.
	 * 
	 * The information contained in the URI always take precedence
	 * over the other information (server and parameters).
	 *
	 * @param string $uri The URI
	 * @param string $method The HTTP method
	 * @param array $parameters The query (GET) or request (POST) parameters
	 * @param array $cookies The request cookies ($_COOKIE)
	 * @param array $files The request files ($_FILES)
	 * @param array $server The server parameters ($_SERVER)
	 * @param string $content The raw body data
	 * @return \Symfony\Component\HttpFoundation\Request A Request instance
	 * @api 
	 * @static 
	 */
	 public static function create($uri, $method = 'GET', $parameters = array(), $cookies = array(), $files = array(), $server = array(), $content = null){
		return static::$root->create($uri, $method, $parameters, $cookies, $files, $server, $content);
	 }

	/**
	 * Clones a request and overrides some of its parameters.
	 *
	 * @param array $query The GET parameters
	 * @param array $request The POST parameters
	 * @param array $attributes The request attributes (parameters parsed from the PATH_INFO, ...)
	 * @param array $cookies The COOKIE parameters
	 * @param array $files The FILES parameters
	 * @param array $server The SERVER parameters
	 * @return \Symfony\Component\HttpFoundation\Request The duplicated request
	 * @api 
	 * @static 
	 */
	 public static function duplicate($query = null, $request = null, $attributes = null, $cookies = null, $files = null, $server = null){
		return static::$root->duplicate($query, $request, $attributes, $cookies, $files, $server);
	 }

	/**
	 * Returns the request as a string.
	 *
	 * @return string The request
	 * @static 
	 */
	 public static function __toString(){
		return static::$root->__toString();
	 }

	/**
	 * Overrides the PHP global variables according to this request instance.
	 * 
	 * It overrides $_GET, $_POST, $_REQUEST, $_SERVER, $_COOKIE.
	 * $_FILES is never override, see rfc1867
	 *
	 * @api 
	 * @static 
	 */
	 public static function overrideGlobals(){
		 static::$root->overrideGlobals();
	 }

	/**
	 * Sets a list of trusted proxies.
	 * 
	 * You should only list the reverse proxies that you manage directly.
	 *
	 * @param array $proxies A list of trusted proxies
	 * @api 
	 * @static 
	 */
	 public static function setTrustedProxies($proxies){
		 static::$root->setTrustedProxies($proxies);
	 }

	/**
	 * Gets the list of trusted proxies.
	 *
	 * @return array An array of trusted proxies.
	 * @static 
	 */
	 public static function getTrustedProxies(){
		return static::$root->getTrustedProxies();
	 }

	/**
	 * Sets the name for trusted headers.
	 * 
	 * The following header keys are supported:
	 * 
	 *  * Request::HEADER_CLIENT_IP:    defaults to X-Forwarded-For   (see getClientIp())
	 *  * Request::HEADER_CLIENT_HOST:  defaults to X-Forwarded-Host  (see getClientHost())
	 *  * Request::HEADER_CLIENT_PORT:  defaults to X-Forwarded-Port  (see getClientPort())
	 *  * Request::HEADER_CLIENT_PROTO: defaults to X-Forwarded-Proto (see getScheme() and isSecure())
	 * 
	 * Setting an empty value allows to disable the trusted header for the given key.
	 *
	 * @param string $key The header key
	 * @param string $value The header name
	 * @throws \InvalidArgumentException
	 * @static 
	 */
	 public static function setTrustedHeaderName($key, $value){
		 static::$root->setTrustedHeaderName($key, $value);
	 }

	/**
	 * Gets the trusted proxy header name.
	 *
	 * @param string $key The header key
	 * @return string The header name
	 * @throws \InvalidArgumentException
	 * @static 
	 */
	 public static function getTrustedHeaderName($key){
		return static::$root->getTrustedHeaderName($key);
	 }

	/**
	 * Normalizes a query string.
	 * 
	 * It builds a normalized query string, where keys/value pairs are alphabetized,
	 * have consistent escaping and unneeded delimiters are removed.
	 *
	 * @param string $qs Query string
	 * @return string A normalized query string for the Request
	 * @static 
	 */
	 public static function normalizeQueryString($qs){
		return static::$root->normalizeQueryString($qs);
	 }

	/**
	 * Enables support for the _method request parameter to determine the intended HTTP method.
	 * 
	 * Be warned that enabling this feature might lead to CSRF issues in your code.
	 * Check that you are using CSRF tokens when required.
	 * 
	 * The HTTP method can only be overridden when the real HTTP method is POST.
	 *
	 * @static 
	 */
	 public static function enableHttpMethodParameterOverride(){
		 static::$root->enableHttpMethodParameterOverride();
	 }

	/**
	 * Checks whether support for the _method request parameter is enabled.
	 *
	 * @return Boolean True when the _method request parameter is enabled, false otherwise
	 * @static 
	 */
	 public static function getHttpMethodParameterOverride(){
		return static::$root->getHttpMethodParameterOverride();
	 }

	/**
	 * Gets a "parameter" value.
	 * 
	 * This method is mainly useful for libraries that want to provide some flexibility.
	 * 
	 * Order of precedence: GET, PATH, POST
	 * 
	 * Avoid using this method in controllers:
	 * 
	 *  * slow
	 *  * prefer to get from a "named" source
	 * 
	 * It is better to explicitly get request parameters from the appropriate
	 * public property instead (query, attributes, request).
	 *
	 * @param string $key the key
	 * @param mixed $default the default value
	 * @param Boolean $deep is parameter deep in multidimensional array
	 * @return mixed 
	 * @static 
	 */
	 public static function get($key, $default = null, $deep = false){
		return static::$root->get($key, $default, $deep);
	 }

	/**
	 * Gets the Session.
	 *
	 * @return \Symfony\Component\HttpFoundation\SessionInterface|null The session
	 * @api 
	 * @static 
	 */
	 public static function getSession(){
		return static::$root->getSession();
	 }

	/**
	 * Whether the request contains a Session which was started in one of the
	 * previous requests.
	 *
	 * @return Boolean 
	 * @api 
	 * @static 
	 */
	 public static function hasPreviousSession(){
		return static::$root->hasPreviousSession();
	 }

	/**
	 * Whether the request contains a Session object.
	 * 
	 * This method does not give any information about the state of the session object,
	 * like whether the session is started or not. It is just a way to check if this Request
	 * is associated with a Session instance.
	 *
	 * @return Boolean true when the Request contains a Session object, false otherwise
	 * @api 
	 * @static 
	 */
	 public static function hasSession(){
		return static::$root->hasSession();
	 }

	/**
	 * Sets the Session.
	 *
	 * @param \Symfony\Component\HttpFoundation\SessionInterface $session The Session
	 * @api 
	 * @static 
	 */
	 public static function setSession($session){
		 static::$root->setSession($session);
	 }

	/**
	 * Returns the client IP addresses.
	 * 
	 * The most trusted IP address is first, and the less trusted one last.
	 * The "real" client IP address is the last one, but this is also the
	 * less trusted one.
	 * 
	 * Use this method carefully; you should use getClientIp() instead.
	 *
	 * @return array The client IP addresses
	 * @see getClientIp()
	 * @static 
	 */
	 public static function getClientIps(){
		return static::$root->getClientIps();
	 }

	/**
	 * Returns the client IP address.
	 * 
	 * This method can read the client IP address from the "X-Forwarded-For" header
	 * when trusted proxies were set via "setTrustedProxies()". The "X-Forwarded-For"
	 * header value is a comma+space separated list of IP addresses, the left-most
	 * being the original client, and each successive proxy that passed the request
	 * adding the IP address where it received the request from.
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-For",
	 * ("Client-Ip" for instance), configure it via "setTrustedHeaderName()" with
	 * the "client-ip" key.
	 *
	 * @return string The client IP address
	 * @see getClientIps()
	 * @see http://en.wikipedia.org/wiki/X-Forwarded-For
	 * @api 
	 * @static 
	 */
	 public static function getClientIp(){
		return static::$root->getClientIp();
	 }

	/**
	 * Returns current script name.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getScriptName(){
		return static::$root->getScriptName();
	 }

	/**
	 * Returns the path being requested relative to the executed script.
	 * 
	 * The path info always starts with a /.
	 * 
	 * Suppose this request is instantiated from /mysite on localhost:
	 * 
	 *  * http://localhost/mysite              returns an empty string
	 *  * http://localhost/mysite/about        returns '/about'
	 *  * http://localhost/mysite/enco%20ded   returns '/enco%20ded'
	 *  * http://localhost/mysite/about?var=1  returns '/about'
	 *
	 * @return string The raw path (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getPathInfo(){
		return static::$root->getPathInfo();
	 }

	/**
	 * Returns the root path from which this request is executed.
	 * 
	 * Suppose that an index.php file instantiates this request object:
	 * 
	 *  * http://localhost/index.php         returns an empty string
	 *  * http://localhost/index.php/page    returns an empty string
	 *  * http://localhost/web/index.php     returns '/web'
	 *  * http://localhost/we%20b/index.php  returns '/we%20b'
	 *
	 * @return string The raw path (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getBasePath(){
		return static::$root->getBasePath();
	 }

	/**
	 * Returns the root url from which this request is executed.
	 * 
	 * The base URL never ends with a /.
	 * 
	 * This is similar to getBasePath(), except that it also includes the
	 * script filename (e.g. index.php) if one exists.
	 *
	 * @return string The raw url (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getBaseUrl(){
		return static::$root->getBaseUrl();
	 }

	/**
	 * Gets the request's scheme.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getScheme(){
		return static::$root->getScheme();
	 }

	/**
	 * Returns the port on which the request is made.
	 * 
	 * This method can read the client port from the "X-Forwarded-Port" header
	 * when trusted proxies were set via "setTrustedProxies()".
	 * 
	 * The "X-Forwarded-Port" header must contain the client port.
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-Port",
	 * configure it via "setTrustedHeaderName()" with the "client-port" key.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getPort(){
		return static::$root->getPort();
	 }

	/**
	 * Returns the user.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function getUser(){
		return static::$root->getUser();
	 }

	/**
	 * Returns the password.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function getPassword(){
		return static::$root->getPassword();
	 }

	/**
	 * Gets the user info.
	 *
	 * @return string A user name and, optionally, scheme-specific information about how to gain authorization to access the server
	 * @static 
	 */
	 public static function getUserInfo(){
		return static::$root->getUserInfo();
	 }

	/**
	 * Returns the HTTP host being requested.
	 * 
	 * The port name will be appended to the host if it's non-standard.
	 *
	 * @return string 
	 * @api 
	 * @static 
	 */
	 public static function getHttpHost(){
		return static::$root->getHttpHost();
	 }

	/**
	 * Returns the requested URI.
	 *
	 * @return string The raw URI (i.e. not urldecoded)
	 * @api 
	 * @static 
	 */
	 public static function getRequestUri(){
		return static::$root->getRequestUri();
	 }

	/**
	 * Gets the scheme and HTTP host.
	 * 
	 * If the URL was called with basic authentication, the user
	 * and the password are not added to the generated string.
	 *
	 * @return string The scheme and HTTP host
	 * @static 
	 */
	 public static function getSchemeAndHttpHost(){
		return static::$root->getSchemeAndHttpHost();
	 }

	/**
	 * Generates a normalized URI for the Request.
	 *
	 * @return string A normalized URI for the Request
	 * @see getQueryString()
	 * @api 
	 * @static 
	 */
	 public static function getUri(){
		return static::$root->getUri();
	 }

	/**
	 * Generates a normalized URI for the given path.
	 *
	 * @param string $path A path to use instead of the current one
	 * @return string The normalized URI for the path
	 * @api 
	 * @static 
	 */
	 public static function getUriForPath($path){
		return static::$root->getUriForPath($path);
	 }

	/**
	 * Generates the normalized query string for the Request.
	 * 
	 * It builds a normalized query string, where keys/value pairs are alphabetized
	 * and have consistent escaping.
	 *
	 * @return string|null A normalized query string for the Request
	 * @api 
	 * @static 
	 */
	 public static function getQueryString(){
		return static::$root->getQueryString();
	 }

	/**
	 * Checks whether the request is secure or not.
	 * 
	 * This method can read the client port from the "X-Forwarded-Proto" header
	 * when trusted proxies were set via "setTrustedProxies()".
	 * 
	 * The "X-Forwarded-Proto" header must contain the protocol: "https" or "http".
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-Proto"
	 * ("SSL_HTTPS" for instance), configure it via "setTrustedHeaderName()" with
	 * the "client-proto" key.
	 *
	 * @return Boolean 
	 * @api 
	 * @static 
	 */
	 public static function isSecure(){
		return static::$root->isSecure();
	 }

	/**
	 * Returns the host name.
	 * 
	 * This method can read the client port from the "X-Forwarded-Host" header
	 * when trusted proxies were set via "setTrustedProxies()".
	 * 
	 * The "X-Forwarded-Host" header must contain the client host name.
	 * 
	 * If your reverse proxy uses a different header name than "X-Forwarded-Host",
	 * configure it via "setTrustedHeaderName()" with the "client-host" key.
	 *
	 * @return string 
	 * @throws \UnexpectedValueException when the host name is invalid
	 * @api 
	 * @static 
	 */
	 public static function getHost(){
		return static::$root->getHost();
	 }

	/**
	 * Sets the request method.
	 *
	 * @param string $method 
	 * @api 
	 * @static 
	 */
	 public static function setMethod($method){
		 static::$root->setMethod($method);
	 }

	/**
	 * Gets the request "intended" method.
	 * 
	 * If the X-HTTP-Method-Override header is set, and if the method is a POST,
	 * then it is used to determine the "real" intended HTTP method.
	 * 
	 * The _method request parameter can also be used to determine the HTTP method,
	 * but only if enableHttpMethodParameterOverride() has been called.
	 * 
	 * The method is always an uppercased string.
	 *
	 * @return string The request method
	 * @api 
	 * @see getRealMethod
	 * @static 
	 */
	 public static function getMethod(){
		return static::$root->getMethod();
	 }

	/**
	 * Gets the "real" request method.
	 *
	 * @return string The request method
	 * @see getMethod
	 * @static 
	 */
	 public static function getRealMethod(){
		return static::$root->getRealMethod();
	 }

	/**
	 * Gets the mime type associated with the format.
	 *
	 * @param string $format The format
	 * @return string The associated mime type (null if not found)
	 * @api 
	 * @static 
	 */
	 public static function getMimeType($format){
		return static::$root->getMimeType($format);
	 }

	/**
	 * Gets the format associated with the mime type.
	 *
	 * @param string $mimeType The associated mime type
	 * @return string|null The format (null if not found)
	 * @api 
	 * @static 
	 */
	 public static function getFormat($mimeType){
		return static::$root->getFormat($mimeType);
	 }

	/**
	 * Associates a format with mime types.
	 *
	 * @param string $format The format
	 * @param string|array $mimeTypes The associated mime types (the preferred one must be the first as it will be used as the content type)
	 * @api 
	 * @static 
	 */
	 public static function setFormat($format, $mimeTypes){
		 static::$root->setFormat($format, $mimeTypes);
	 }

	/**
	 * Gets the request format.
	 * 
	 * Here is the process to determine the format:
	 * 
	 *  * format defined by the user (with setRequestFormat())
	 *  * _format request parameter
	 *  * $default
	 *
	 * @param string $default The default format
	 * @return string The request format
	 * @api 
	 * @static 
	 */
	 public static function getRequestFormat($default = 'html'){
		return static::$root->getRequestFormat($default);
	 }

	/**
	 * Sets the request format.
	 *
	 * @param string $format The request format.
	 * @api 
	 * @static 
	 */
	 public static function setRequestFormat($format){
		 static::$root->setRequestFormat($format);
	 }

	/**
	 * Gets the format associated with the request.
	 *
	 * @return string|null The format (null if no content type is present)
	 * @api 
	 * @static 
	 */
	 public static function getContentType(){
		return static::$root->getContentType();
	 }

	/**
	 * Sets the default locale.
	 *
	 * @param string $locale 
	 * @api 
	 * @static 
	 */
	 public static function setDefaultLocale($locale){
		 static::$root->setDefaultLocale($locale);
	 }

	/**
	 * Sets the locale.
	 *
	 * @param string $locale 
	 * @api 
	 * @static 
	 */
	 public static function setLocale($locale){
		 static::$root->setLocale($locale);
	 }

	/**
	 * Get the locale.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getLocale(){
		return static::$root->getLocale();
	 }

	/**
	 * Checks if the request method is of specified type.
	 *
	 * @param string $method Uppercase request method (GET, POST etc).
	 * @return Boolean 
	 * @static 
	 */
	 public static function isMethod($method){
		return static::$root->isMethod($method);
	 }

	/**
	 * Checks whether the method is safe or not.
	 *
	 * @return Boolean 
	 * @api 
	 * @static 
	 */
	 public static function isMethodSafe(){
		return static::$root->isMethodSafe();
	 }

	/**
	 * Returns the request body content.
	 *
	 * @param Boolean $asResource If true, a resource will be returned
	 * @return string|resource The request body content or a resource to read the body stream.
	 * @throws \LogicException
	 * @static 
	 */
	 public static function getContent($asResource = false){
		return static::$root->getContent($asResource);
	 }

	/**
	 * Gets the Etags.
	 *
	 * @return array The entity tags
	 * @static 
	 */
	 public static function getETags(){
		return static::$root->getETags();
	 }

	/**
	 * 
	 *
	 * @return Boolean 
	 * @static 
	 */
	 public static function isNoCache(){
		return static::$root->isNoCache();
	 }

	/**
	 * Returns the preferred language.
	 *
	 * @param array $locales An array of ordered available locales
	 * @return string|null The preferred locale
	 * @api 
	 * @static 
	 */
	 public static function getPreferredLanguage($locales = null){
		return static::$root->getPreferredLanguage($locales);
	 }

	/**
	 * Gets a list of languages acceptable by the client browser.
	 *
	 * @return array Languages ordered in the user browser preferences
	 * @api 
	 * @static 
	 */
	 public static function getLanguages(){
		return static::$root->getLanguages();
	 }

	/**
	 * Gets a list of charsets acceptable by the client browser.
	 *
	 * @return array List of charsets in preferable order
	 * @api 
	 * @static 
	 */
	 public static function getCharsets(){
		return static::$root->getCharsets();
	 }

	/**
	 * Gets a list of content types acceptable by the client browser
	 *
	 * @return array List of content types in preferable order
	 * @api 
	 * @static 
	 */
	 public static function getAcceptableContentTypes(){
		return static::$root->getAcceptableContentTypes();
	 }

	/**
	 * Returns true if the request is a XMLHttpRequest.
	 * 
	 * It works if your JavaScript library set an X-Requested-With HTTP header.
	 * It is known to work with common JavaScript frameworks:
	 *
	 * @link http://en.wikipedia.org/wiki/List_of_Ajax_frameworks#JavaScript
	 * @return Boolean true if the request is an XMLHttpRequest, false otherwise
	 * @api 
	 * @static 
	 */
	 public static function isXmlHttpRequest(){
		return static::$root->isXmlHttpRequest();
	 }

 }
}

namespace  {
 class Response{
	/**
	 * @var \Illuminate\Support\Facades\Response $root
	 */
	 static private $root;

	/**
	 * Return a new response from the application.
	 *
	 * @param string $content 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function make($content = '', $status = 200, $headers = array()){
		return static::$root->make($content, $status, $headers);
	 }

	/**
	 * Return a new view response from the application.
	 *
	 * @param string $view 
	 * @param array $data 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function view($view, $data = array(), $status = 200, $headers = array()){
		return static::$root->view($view, $data, $status, $headers);
	 }

	/**
	 * Return a new JSON response from the application.
	 *
	 * @param string|array $data 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Illuminate\Http\JsonResponse 
	 * @static 
	 */
	 public static function json($data = array(), $status = 200, $headers = array()){
		return static::$root->json($data, $status, $headers);
	 }

	/**
	 * Return a new streamed response from the application.
	 *
	 * @param \Closure $callback 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Symfony\Component\HttpFoundation\StreamedResponse 
	 * @static 
	 */
	 public static function stream($callback, $status = 200, $headers = array()){
		return static::$root->stream($callback, $status, $headers);
	 }

	/**
	 * Create a new file download response.
	 *
	 * @param \Illuminate\Support\Facades\SplFileInfo|string $file 
	 * @param int $status 
	 * @param array $headers 
	 * @return \Symfony\Component\HttpFoundation\BinaryFileResponse 
	 * @static 
	 */
	 public static function download($file, $name = null, $headers = array()){
		return static::$root->download($file, $name, $headers);
	 }

 }
}

namespace  {
 class Route extends Illuminate\Support\Facades\Route{
	/**
	 * @var \Illuminate\Routing\Router $root
	 */
	 static private $root;

	/**
	 * Create a new router instance.
	 *
	 * @param \Illuminate\Container\Container $container 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($container = null){
		 static::$root->__construct($container);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function get($pattern, $action){
		return static::$root->get($pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function post($pattern, $action){
		return static::$root->post($pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function put($pattern, $action){
		return static::$root->put($pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function patch($pattern, $action){
		return static::$root->patch($pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function delete($pattern, $action){
		return static::$root->delete($pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function options($pattern, $action){
		return static::$root->options($pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $method 
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function match($method, $pattern, $action){
		return static::$root->match($method, $pattern, $action);
	 }

	/**
	 * Add a new route to the collection.
	 *
	 * @param string $pattern 
	 * @param mixed $action 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function any($pattern, $action){
		return static::$root->any($pattern, $action);
	 }

	/**
	 * Register an array of controllers with wildcard routing.
	 *
	 * @param array $controllers 
	 * @return void 
	 * @static 
	 */
	 public static function controllers($controllers){
		 static::$root->controllers($controllers);
	 }

	/**
	 * Route a controller to a URI with wildcard routing.
	 *
	 * @param string $uri 
	 * @param string $controller 
	 * @param array $names 
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function controller($uri, $controller, $names = array()){
		return static::$root->controller($uri, $controller, $names);
	 }

	/**
	 * Route a resource to a controller.
	 *
	 * @param string $resource 
	 * @param string $controller 
	 * @param array $options 
	 * @return void 
	 * @static 
	 */
	 public static function resource($resource, $controller, $options = array()){
		 static::$root->resource($resource, $controller, $options);
	 }

	/**
	 * Get the base resource URI for a given resource.
	 *
	 * @param string $resource 
	 * @return string 
	 * @static 
	 */
	 public static function getResourceUri($resource){
		return static::$root->getResourceUri($resource);
	 }

	/**
	 * Format a resource wildcard parameter.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function getResourceWildcard($value){
		return static::$root->getResourceWildcard($value);
	 }

	/**
	 * Create a route group with shared attributes.
	 *
	 * @param array $attributes 
	 * @param \Closure $callback 
	 * @return void 
	 * @static 
	 */
	 public static function group($attributes, $callback){
		 static::$root->group($attributes, $callback);
	 }

	/**
	 * Get the response for a given request.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function dispatch($request){
		return static::$root->dispatch($request);
	 }

	/**
	 * Register a "before" routing filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function before($callback){
		 static::$root->before($callback);
	 }

	/**
	 * Register an "after" routing filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function after($callback){
		 static::$root->after($callback);
	 }

	/**
	 * Register a "close" routing filter.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function close($callback){
		 static::$root->close($callback);
	 }

	/**
	 * Register a "finish" routing filters.
	 *
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function finish($callback){
		 static::$root->finish($callback);
	 }

	/**
	 * Register a new filter with the application.
	 *
	 * @param string $name 
	 * @param \Closure|string $callback 
	 * @return void 
	 * @static 
	 */
	 public static function filter($name, $callback){
		 static::$root->filter($name, $callback);
	 }

	/**
	 * Get a registered filter callback.
	 *
	 * @param string $name 
	 * @return \Illuminate\Routing\Closure 
	 * @static 
	 */
	 public static function getFilter($name){
		return static::$root->getFilter($name);
	 }

	/**
	 * Tie a registered filter to a URI pattern.
	 *
	 * @param string $pattern 
	 * @param string|array $names 
	 * @param array|null $methods 
	 * @return void 
	 * @static 
	 */
	 public static function when($pattern, $names, $methods = null){
		 static::$root->when($pattern, $names, $methods);
	 }

	/**
	 * Find the patterned filters matching a request.
	 *
	 * @param \Illuminate\Http\Request $request 
	 * @return array 
	 * @static 
	 */
	 public static function findPatternFilters($request){
		return static::$root->findPatternFilters($request);
	 }

	/**
	 * Call the finish" global filter.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @param \Symfony\Component\HttpFoundation\Response $response 
	 * @return mixed 
	 * @static 
	 */
	 public static function callFinishFilter($request, $response){
		return static::$root->callFinishFilter($request, $response);
	 }

	/**
	 * Call the "close" global filter.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @param \Symfony\Component\HttpFoundation\Response $response 
	 * @return mixed 
	 * @static 
	 */
	 public static function callCloseFilter($request, $response){
		return static::$root->callCloseFilter($request, $response);
	 }

	/**
	 * Set a global where pattern on all routes
	 *
	 * @param string $key 
	 * @param string $pattern 
	 * @return void 
	 * @static 
	 */
	 public static function pattern($key, $pattern){
		 static::$root->pattern($key, $pattern);
	 }

	/**
	 * Register a model binder for a wildcard.
	 *
	 * @param string $key 
	 * @param string $class 
	 * @return void 
	 * @static 
	 */
	 public static function model($key, $class, $callback = null){
		 static::$root->model($key, $class, $callback);
	 }

	/**
	 * Register a custom parameter binder.
	 *
	 * @param string $key 
	 * @param mixed $binder 
	 * @static 
	 */
	 public static function bind($key, $binder){
		 static::$root->bind($key, $binder);
	 }

	/**
	 * Determine if a given key has a registered binder.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasBinder($key){
		return static::$root->hasBinder($key);
	 }

	/**
	 * Call a binder for a given wildcard.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @param \Illuminate\Routing\Route $route 
	 * @return mixed 
	 * @static 
	 */
	 public static function performBinding($key, $value, $route){
		return static::$root->performBinding($key, $value, $route);
	 }

	/**
	 * Prepare the given value as a Response object.
	 *
	 * @param mixed $value 
	 * @param \Illuminate\Http\Request $request 
	 * @return \Symfony\Component\HttpFoundation\Response 
	 * @static 
	 */
	 public static function prepare($value, $request){
		return static::$root->prepare($value, $request);
	 }

	/**
	 * Get the current route name.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function currentRouteName(){
		return static::$root->currentRouteName();
	 }

	/**
	 * Determine if the current route has a given name.
	 *
	 * @param string $name 
	 * @return bool 
	 * @static 
	 */
	 public static function currentRouteNamed($name){
		return static::$root->currentRouteNamed($name);
	 }

	/**
	 * Get the current route action.
	 *
	 * @return string|null 
	 * @static 
	 */
	 public static function currentRouteAction(){
		return static::$root->currentRouteAction();
	 }

	/**
	 * Determine if the current route uses a given controller action.
	 *
	 * @param string $action 
	 * @return bool 
	 * @static 
	 */
	 public static function currentRouteUses($action){
		return static::$root->currentRouteUses($action);
	 }

	/**
	 * Determine if route filters are enabled.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function filtersEnabled(){
		return static::$root->filtersEnabled();
	 }

	/**
	 * Enable the running of filters.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function enableFilters(){
		 static::$root->enableFilters();
	 }

	/**
	 * Disable the running of all filters.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function disableFilters(){
		 static::$root->disableFilters();
	 }

	/**
	 * Retrieve the entire route collection.
	 *
	 * @return \Symfony\Component\Routing\RouteCollection 
	 * @static 
	 */
	 public static function getRoutes(){
		return static::$root->getRoutes();
	 }

	/**
	 * Get the current request being dispatched.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request 
	 * @static 
	 */
	 public static function getRequest(){
		return static::$root->getRequest();
	 }

	/**
	 * Get the current route being executed.
	 *
	 * @return \Illuminate\Routing\Route 
	 * @static 
	 */
	 public static function getCurrentRoute(){
		return static::$root->getCurrentRoute();
	 }

	/**
	 * Set the current route on the router.
	 *
	 * @param \Illuminate\Routing\Route $route 
	 * @return void 
	 * @static 
	 */
	 public static function setCurrentRoute($route){
		 static::$root->setCurrentRoute($route);
	 }

	/**
	 * Get the filters defined on the router.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getFilters(){
		return static::$root->getFilters();
	 }

	/**
	 * Get the global filters defined on the router.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getGlobalFilters(){
		return static::$root->getGlobalFilters();
	 }

	/**
	 * Get the controller inspector instance.
	 *
	 * @return \Illuminate\Routing\Controllers\Inspector 
	 * @static 
	 */
	 public static function getInspector(){
		return static::$root->getInspector();
	 }

	/**
	 * Set the controller inspector instance.
	 *
	 * @param \Illuminate\Routing\Controllers\Inspector $inspector 
	 * @return void 
	 * @static 
	 */
	 public static function setInspector($inspector){
		 static::$root->setInspector($inspector);
	 }

	/**
	 * Get the container used by the router.
	 *
	 * @return \Illuminate\Container\Container 
	 * @static 
	 */
	 public static function getContainer(){
		return static::$root->getContainer();
	 }

	/**
	 * Set the container instance on the router.
	 *
	 * @param \Illuminate\Container\Container $container 
	 * @return void 
	 * @static 
	 */
	 public static function setContainer($container){
		 static::$root->setContainer($container);
	 }

 }
}

namespace  {
 class Seeder extends Illuminate\Database\Seeder{
	/**
	 * @var \Illuminate\Database\Seeder $root
	 */
	 static private $root;

 }
}

namespace  {
 class Session extends Illuminate\Support\Facades\Session{
	/**
	 * @var \Illuminate\Session\Store $root
	 */
	 static private $root;

	/**
	 * Starts the session storage.
	 *
	 * @return Boolean True if session started.
	 * @throws \RuntimeException If session fails to start.
	 * @api 
	 * @static 
	 */
	 public static function start(){
		return static::$root->start();
	 }

	/**
	 * Force the session to be saved and closed.
	 * 
	 * This method is generally not required for real sessions as
	 * the session will be automatically saved at the end of
	 * code execution.
	 *
	 * @static 
	 */
	 public static function save(){
		 static::$root->save();
	 }

	/**
	 * Checks if an attribute is defined.
	 *
	 * @param string $name The attribute name
	 * @return Boolean true if the attribute is defined, false otherwise
	 * @api 
	 * @static 
	 */
	 public static function has($name){
		return static::$root->has($name);
	 }

	/**
	 * Returns an attribute.
	 *
	 * @param string $name The attribute name
	 * @param mixed $default The default value if not found.
	 * @return mixed 
	 * @api 
	 * @static 
	 */
	 public static function get($name, $default = null){
		return static::$root->get($name, $default);
	 }

	/**
	 * Determine if the session contains old input.
	 *
	 * @param string $key 
	 * @return bool 
	 * @static 
	 */
	 public static function hasOldInput($key){
		return static::$root->hasOldInput($key);
	 }

	/**
	 * Get the requested item from the flashed input array.
	 *
	 * @param string $key 
	 * @param mixed $default 
	 * @return mixed 
	 * @static 
	 */
	 public static function getOldInput($key = null, $default = null){
		return static::$root->getOldInput($key, $default);
	 }

	/**
	 * Get the CSRF token value.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function getToken(){
		return static::$root->getToken();
	 }

	/**
	 * Get the CSRF token value.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function token(){
		return static::$root->token();
	 }

	/**
	 * Put a key / value pair in the session.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function put($key, $value){
		 static::$root->put($key, $value);
	 }

	/**
	 * Push a value onto a session array.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function push($key, $value){
		 static::$root->push($key, $value);
	 }

	/**
	 * Flash a key / value pair to the session.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function flash($key, $value){
		 static::$root->flash($key, $value);
	 }

	/**
	 * Flash an input array to the session.
	 *
	 * @param array $value 
	 * @return void 
	 * @static 
	 */
	 public static function flashInput($value){
		 static::$root->flashInput($value);
	 }

	/**
	 * Reflash all of the session flash data.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function reflash(){
		 static::$root->reflash();
	 }

	/**
	 * Reflash a subset of the current flash data.
	 *
	 * @param array|\Illuminate\Session\dynamic $keys 
	 * @return void 
	 * @static 
	 */
	 public static function keep($keys = null){
		 static::$root->keep($keys);
	 }

	/**
	 * Remove an item from the session.
	 *
	 * @param string $key 
	 * @return void 
	 * @static 
	 */
	 public static function forget($key){
		 static::$root->forget($key);
	 }

	/**
	 * Remove all of the items from the session.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flush(){
		 static::$root->flush();
	 }

	/**
	 * Generate a new session identifier.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function regenerate(){
		return static::$root->regenerate();
	 }

	/**
	 * Constructor.
	 *
	 * @param \Symfony\Component\HttpFoundation\Session\SessionStorageInterface $storage A SessionStorageInterface instance.
	 * @param \Symfony\Component\HttpFoundation\Session\AttributeBagInterface $attributes An AttributeBagInterface instance, (defaults null for default AttributeBag)
	 * @param \Symfony\Component\HttpFoundation\Session\FlashBagInterface $flashes A FlashBagInterface instance (defaults null for default FlashBag)
	 * @static 
	 */
	 public static function __construct($storage = null, $attributes = null, $flashes = null){
		 static::$root->__construct($storage, $attributes, $flashes);
	 }

	/**
	 * Sets an attribute.
	 *
	 * @param string $name 
	 * @param mixed $value 
	 * @api 
	 * @static 
	 */
	 public static function set($name, $value){
		 static::$root->set($name, $value);
	 }

	/**
	 * Returns attributes.
	 *
	 * @return array Attributes
	 * @api 
	 * @static 
	 */
	 public static function all(){
		return static::$root->all();
	 }

	/**
	 * Sets attributes.
	 *
	 * @param array $attributes Attributes
	 * @static 
	 */
	 public static function replace($attributes){
		 static::$root->replace($attributes);
	 }

	/**
	 * Removes an attribute.
	 *
	 * @param string $name 
	 * @return mixed The removed value
	 * @api 
	 * @static 
	 */
	 public static function remove($name){
		return static::$root->remove($name);
	 }

	/**
	 * Clears all attributes.
	 *
	 * @api 
	 * @static 
	 */
	 public static function clear(){
		 static::$root->clear();
	 }

	/**
	 * Checks if the session was started.
	 *
	 * @return Boolean 
	 * @static 
	 */
	 public static function isStarted(){
		return static::$root->isStarted();
	 }

	/**
	 * Returns an iterator for attributes.
	 *
	 * @return \ArrayIterator An \ArrayIterator instance
	 * @static 
	 */
	 public static function getIterator(){
		return static::$root->getIterator();
	 }

	/**
	 * Returns the number of attributes.
	 *
	 * @return int The number of attributes
	 * @static 
	 */
	 public static function count(){
		return static::$root->count();
	 }

	/**
	 * Invalidates the current session.
	 * 
	 * Clears all session attributes and flashes and regenerates the
	 * session and deletes the old session from persistence.
	 *
	 * @param integer $lifetime Sets the cookie lifetime for the session cookie. A null value
	 *                          will leave the system settings unchanged, 0 sets the cookie
	 *                          to expire with browser session. Time is in seconds, and is
	 *                          not a Unix timestamp.
	 * @return Boolean True if session invalidated, false if error.
	 * @api 
	 * @static 
	 */
	 public static function invalidate($lifetime = null){
		return static::$root->invalidate($lifetime);
	 }

	/**
	 * Migrates the current session to a new session id while maintaining all
	 * session attributes.
	 *
	 * @param Boolean $destroy Whether to delete the old session or leave it to garbage collection.
	 * @param integer $lifetime Sets the cookie lifetime for the session cookie. A null value
	 *                          will leave the system settings unchanged, 0 sets the cookie
	 *                          to expire with browser session. Time is in seconds, and is
	 *                          not a Unix timestamp.
	 * @return Boolean True if session migrated, false if error.
	 * @api 
	 * @static 
	 */
	 public static function migrate($destroy = false, $lifetime = null){
		return static::$root->migrate($destroy, $lifetime);
	 }

	/**
	 * Returns the session ID.
	 *
	 * @return string The session ID.
	 * @api 
	 * @static 
	 */
	 public static function getId(){
		return static::$root->getId();
	 }

	/**
	 * Sets the session ID
	 *
	 * @param string $id 
	 * @api 
	 * @static 
	 */
	 public static function setId($id){
		 static::$root->setId($id);
	 }

	/**
	 * Returns the session name.
	 *
	 * @return mixed The session name.
	 * @api 
	 * @static 
	 */
	 public static function getName(){
		return static::$root->getName();
	 }

	/**
	 * Sets the session name.
	 *
	 * @param string $name 
	 * @api 
	 * @static 
	 */
	 public static function setName($name){
		 static::$root->setName($name);
	 }

	/**
	 * Gets session meta.
	 *
	 * @return \Symfony\Component\HttpFoundation\Session\MetadataBag 
	 * @static 
	 */
	 public static function getMetadataBag(){
		return static::$root->getMetadataBag();
	 }

	/**
	 * Registers a SessionBagInterface with the session.
	 *
	 * @param \Symfony\Component\HttpFoundation\Session\SessionBagInterface $bag 
	 * @static 
	 */
	 public static function registerBag($bag){
		 static::$root->registerBag($bag);
	 }

	/**
	 * Gets a bag instance by name.
	 *
	 * @param string $name 
	 * @return \Symfony\Component\HttpFoundation\Session\SessionBagInterface 
	 * @static 
	 */
	 public static function getBag($name){
		return static::$root->getBag($name);
	 }

	/**
	 * Gets the flashbag interface.
	 *
	 * @return \Symfony\Component\HttpFoundation\Session\FlashBagInterface 
	 * @static 
	 */
	 public static function getFlashBag(){
		return static::$root->getFlashBag();
	 }

 }
}

namespace  {
 class Str{
	/**
	 * @var \Illuminate\Support\Str $root
	 */
	 static private $root;

	/**
	 * Transliterate a UTF-8 value to ASCII.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function ascii($value){
		return static::$root->ascii($value);
	 }

	/**
	 * Convert a value to camel case.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function camel($value){
		return static::$root->camel($value);
	 }

	/**
	 * Determine if a given string contains a given sub-string.
	 *
	 * @param string $haystack 
	 * @param string|array $needle 
	 * @return bool 
	 * @static 
	 */
	 public static function contains($haystack, $needle){
		return static::$root->contains($haystack, $needle);
	 }

	/**
	 * Determine if a given string ends with a given needle.
	 *
	 * @param string $haystack 
	 * @param string|array $needles 
	 * @return bool 
	 * @static 
	 */
	 public static function endsWith($haystack, $needles){
		return static::$root->endsWith($haystack, $needles);
	 }

	/**
	 * Cap a string with a single instance of a given value.
	 *
	 * @param string $value 
	 * @param string $cap 
	 * @return string 
	 * @static 
	 */
	 public static function finish($value, $cap){
		return static::$root->finish($value, $cap);
	 }

	/**
	 * Determine if a given string matches a given pattern.
	 *
	 * @param string $pattern 
	 * @param string $value 
	 * @return bool 
	 * @static 
	 */
	 public static function is($pattern, $value){
		return static::$root->is($pattern, $value);
	 }

	/**
	 * Return the length of the given string.
	 *
	 * @param string $value 
	 * @return int 
	 * @static 
	 */
	 public static function length($value){
		return static::$root->length($value);
	 }

	/**
	 * Limit the number of characters in a string.
	 *
	 * @param string $value 
	 * @param int $limit 
	 * @param string $end 
	 * @return string 
	 * @static 
	 */
	 public static function limit($value, $limit = 100, $end = '...'){
		return static::$root->limit($value, $limit, $end);
	 }

	/**
	 * Convert the given string to lower-case.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function lower($value){
		return static::$root->lower($value);
	 }

	/**
	 * Limit the number of words in a string.
	 *
	 * @param string $value 
	 * @param int $words 
	 * @param string $end 
	 * @return string 
	 * @static 
	 */
	 public static function words($value, $words = 100, $end = '...'){
		return static::$root->words($value, $words, $end);
	 }

	/**
	 * Get the plural form of an English word.
	 *
	 * @param string $value 
	 * @param int $count 
	 * @return string 
	 * @static 
	 */
	 public static function plural($value, $count = 2){
		return static::$root->plural($value, $count);
	 }

	/**
	 * Generate a more truly "random" alpha-numeric string.
	 *
	 * @param int $length 
	 * @return string 
	 * @static 
	 */
	 public static function random($length = 16){
		return static::$root->random($length);
	 }

	/**
	 * Generate a "random" alpha-numeric string.
	 * 
	 * Should not be considered sufficient for cryptography, etc.
	 *
	 * @param int $length 
	 * @return string 
	 * @static 
	 */
	 public static function quickRandom($length = 16){
		return static::$root->quickRandom($length);
	 }

	/**
	 * Convert the given string to upper-case.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function upper($value){
		return static::$root->upper($value);
	 }

	/**
	 * Get the singular form of an English word.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function singular($value){
		return static::$root->singular($value);
	 }

	/**
	 * Generate a URL friendly "slug" from a given string.
	 *
	 * @param string $title 
	 * @param string $separator 
	 * @return string 
	 * @static 
	 */
	 public static function slug($title, $separator = '-'){
		return static::$root->slug($title, $separator);
	 }

	/**
	 * Convert a string to snake case.
	 *
	 * @param string $value 
	 * @param string $delimiter 
	 * @return string 
	 * @static 
	 */
	 public static function snake($value, $delimiter = '_'){
		return static::$root->snake($value, $delimiter);
	 }

	/**
	 * Determine if a string starts with a given needle.
	 *
	 * @param string $haystack 
	 * @param string|array $needles 
	 * @return bool 
	 * @static 
	 */
	 public static function startsWith($haystack, $needles){
		return static::$root->startsWith($haystack, $needles);
	 }

	/**
	 * Convert a value to studly caps case.
	 *
	 * @param string $value 
	 * @return string 
	 * @static 
	 */
	 public static function studly($value){
		return static::$root->studly($value);
	 }

	/**
	 * Register a custom string macro.
	 *
	 * @param string $name 
	 * @param callable $macro 
	 * @return void 
	 * @static 
	 */
	 public static function macro($name, $macro){
		 static::$root->macro($name, $macro);
	 }

	/**
	 * Dynamically handle calls to the string class.
	 *
	 * @param string $method 
	 * @param array $parameters 
	 * @return mixed 
	 * @static 
	 */
	 public static function __callStatic($method, $parameters){
		return static::$root->__callStatic($method, $parameters);
	 }

 }
}

namespace  {
 class URL extends Illuminate\Support\Facades\URL{
	/**
	 * @var \Illuminate\Routing\UrlGenerator $root
	 */
	 static private $root;

	/**
	 * Create a new URL Generator instance.
	 *
	 * @param \Symfony\Component\Routing\RouteCollection $routes 
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($routes, $request){
		 static::$root->__construct($routes, $request);
	 }

	/**
	 * Get the full URL for the current request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function full(){
		return static::$root->full();
	 }

	/**
	 * Get the current URL for the request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function current(){
		return static::$root->current();
	 }

	/**
	 * Get the URL for the previous request.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function previous(){
		return static::$root->previous();
	 }

	/**
	 * Generate a absolute URL to the given path.
	 *
	 * @param string $path 
	 * @param mixed $parameters 
	 * @param bool $secure 
	 * @return string 
	 * @static 
	 */
	 public static function to($path, $parameters = array(), $secure = null){
		return static::$root->to($path, $parameters, $secure);
	 }

	/**
	 * Generate a secure, absolute URL to the given path.
	 *
	 * @param string $path 
	 * @param array $parameters 
	 * @return string 
	 * @static 
	 */
	 public static function secure($path, $parameters = array()){
		return static::$root->secure($path, $parameters);
	 }

	/**
	 * Generate a URL to an application asset.
	 *
	 * @param string $path 
	 * @param bool $secure 
	 * @return string 
	 * @static 
	 */
	 public static function asset($path, $secure = null){
		return static::$root->asset($path, $secure);
	 }

	/**
	 * Generate a URL to a secure asset.
	 *
	 * @param string $path 
	 * @return string 
	 * @static 
	 */
	 public static function secureAsset($path){
		return static::$root->secureAsset($path);
	 }

	/**
	 * Get the URL to a named route.
	 *
	 * @param string $name 
	 * @param mixed $parameters 
	 * @param bool $absolute 
	 * @return string 
	 * @static 
	 */
	 public static function route($name, $parameters = array(), $absolute = true){
		return static::$root->route($name, $parameters, $absolute);
	 }

	/**
	 * Get the URL to a controller action.
	 *
	 * @param string $action 
	 * @param mixed $parameters 
	 * @param bool $absolute 
	 * @return string 
	 * @static 
	 */
	 public static function action($action, $parameters = array(), $absolute = true){
		return static::$root->action($action, $parameters, $absolute);
	 }

	/**
	 * Determine if the given path is a valid URL.
	 *
	 * @param string $path 
	 * @return bool 
	 * @static 
	 */
	 public static function isValidUrl($path){
		return static::$root->isValidUrl($path);
	 }

	/**
	 * Get the request instance.
	 *
	 * @return \Symfony\Component\HttpFoundation\Request 
	 * @static 
	 */
	 public static function getRequest(){
		return static::$root->getRequest();
	 }

	/**
	 * Set the current request instance.
	 *
	 * @param \Symfony\Component\HttpFoundation\Request $request 
	 * @return void 
	 * @static 
	 */
	 public static function setRequest($request){
		 static::$root->setRequest($request);
	 }

	/**
	 * Get the Symfony URL generator instance.
	 *
	 * @return \Symfony\Component\Routing\Generator\UrlGenerator 
	 * @static 
	 */
	 public static function getGenerator(){
		return static::$root->getGenerator();
	 }

	/**
	 * Set the Symfony URL generator instance.
	 *
	 * @param \Symfony\Component\Routing\Generator\UrlGenerator $generator 
	 * @return void 
	 * @static 
	 */
	 public static function setGenerator($generator){
		 static::$root->setGenerator($generator);
	 }

 }
}

namespace  {
 class Validator extends Illuminate\Support\Facades\Validator{
	/**
	 * @var \Illuminate\Validation\Factory $root
	 */
	 static private $root;

	/**
	 * Create a new Validator factory instance.
	 *
	 * @param \Symfony\Component\Translation\TranslatorInterface $translator 
	 * @param \Illuminate\Container\Container $container 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($translator, $container = null){
		 static::$root->__construct($translator, $container);
	 }

	/**
	 * Create a new Validator instance.
	 *
	 * @param array $data 
	 * @param array $rules 
	 * @param array $messages 
	 * @return \Illuminate\Validation\Validator 
	 * @static 
	 */
	 public static function make($data, $rules, $messages = array()){
		return static::$root->make($data, $rules, $messages);
	 }

	/**
	 * Register a custom validator extension.
	 *
	 * @param string $rule 
	 * @param \Closure|string $extension 
	 * @return void 
	 * @static 
	 */
	 public static function extend($rule, $extension){
		 static::$root->extend($rule, $extension);
	 }

	/**
	 * Register a custom implicit validator extension.
	 *
	 * @param string $rule 
	 * @param \Closure $extension 
	 * @return void 
	 * @static 
	 */
	 public static function extendImplicit($rule, $extension){
		 static::$root->extendImplicit($rule, $extension);
	 }

	/**
	 * Set the Validator instance resolver.
	 *
	 * @param \Closure $resolver 
	 * @return void 
	 * @static 
	 */
	 public static function resolver($resolver){
		 static::$root->resolver($resolver);
	 }

	/**
	 * Get the Translator implementation.
	 *
	 * @return \Symfony\Component\Translation\TranslatorInterface 
	 * @static 
	 */
	 public static function getTranslator(){
		return static::$root->getTranslator();
	 }

	/**
	 * Get the Presence Verifier implementation.
	 *
	 * @return \Illuminate\Validation\PresenceVerifierInterface 
	 * @static 
	 */
	 public static function getPresenceVerifier(){
		return static::$root->getPresenceVerifier();
	 }

	/**
	 * Set the Presence Verifier implementation.
	 *
	 * @param \Illuminate\Validation\PresenceVerifierInterface $presenceVerifier 
	 * @return void 
	 * @static 
	 */
	 public static function setPresenceVerifier($presenceVerifier){
		 static::$root->setPresenceVerifier($presenceVerifier);
	 }

 }
}

namespace  {
 class View extends Illuminate\Support\Facades\View{
	/**
	 * @var \Illuminate\View\Environment $root
	 */
	 static private $root;

	/**
	 * Create a new view environment instance.
	 *
	 * @param \Illuminate\View\Engines\EngineResolver $engines 
	 * @param \Illuminate\View\ViewFinderInterface $finder 
	 * @param \Illuminate\Events\Dispatcher $events 
	 * @return void 
	 * @static 
	 */
	 public static function __construct($engines, $finder, $events){
		 static::$root->__construct($engines, $finder, $events);
	 }

	/**
	 * Get a evaluated view contents for the given view.
	 *
	 * @param string $view 
	 * @param array $data 
	 * @param array $mergeData 
	 * @return \Illuminate\View\View 
	 * @static 
	 */
	 public static function make($view, $data = array(), $mergeData = array()){
		return static::$root->make($view, $data, $mergeData);
	 }

	/**
	 * Get a evaluated view contents for a named view.
	 *
	 * @param string $view 
	 * @param mixed $data 
	 * @return \Illuminate\View\View 
	 * @static 
	 */
	 public static function of($view, $data = array()){
		return static::$root->of($view, $data);
	 }

	/**
	 * Register a named view.
	 *
	 * @param string $view 
	 * @param string $name 
	 * @return void 
	 * @static 
	 */
	 public static function name($view, $name){
		 static::$root->name($view, $name);
	 }

	/**
	 * Determine if a given view exists.
	 *
	 * @param string $view 
	 * @return bool 
	 * @static 
	 */
	 public static function exists($view){
		return static::$root->exists($view);
	 }

	/**
	 * Get the rendered contents of a partial from a loop.
	 *
	 * @param string $view 
	 * @param array $data 
	 * @param string $iterator 
	 * @param string $empty 
	 * @return string 
	 * @static 
	 */
	 public static function renderEach($view, $data, $iterator, $empty = 'raw|'){
		return static::$root->renderEach($view, $data, $iterator, $empty);
	 }

	/**
	 * Add a piece of shared data to the environment.
	 *
	 * @param string $key 
	 * @param mixed $value 
	 * @return void 
	 * @static 
	 */
	 public static function share($key, $value = null){
		 static::$root->share($key, $value);
	 }

	/**
	 * Register a view composer event.
	 *
	 * @param array|string $views 
	 * @param \Closure|string $callback 
	 * @return \Illuminate\View\Closure 
	 * @static 
	 */
	 public static function composer($views, $callback){
		return static::$root->composer($views, $callback);
	 }

	/**
	 * Call the composer for a given view.
	 *
	 * @param \Illuminate\View\View $view 
	 * @return void 
	 * @static 
	 */
	 public static function callComposer($view){
		 static::$root->callComposer($view);
	 }

	/**
	 * Start injecting content into a section.
	 *
	 * @param string $section 
	 * @param string $content 
	 * @return void 
	 * @static 
	 */
	 public static function startSection($section, $content = ''){
		 static::$root->startSection($section, $content);
	 }

	/**
	 * Inject inline content into a section.
	 *
	 * @param string $section 
	 * @param string $content 
	 * @return void 
	 * @static 
	 */
	 public static function inject($section, $content){
		 static::$root->inject($section, $content);
	 }

	/**
	 * Stop injecting content into a section and return its contents.
	 *
	 * @return string 
	 * @static 
	 */
	 public static function yieldSection(){
		return static::$root->yieldSection();
	 }

	/**
	 * Stop injecting content into a section.
	 *
	 * @param bool $overwrite 
	 * @return string 
	 * @static 
	 */
	 public static function stopSection($overwrite = false){
		return static::$root->stopSection($overwrite);
	 }

	/**
	 * Get the string contents of a section.
	 *
	 * @param string $section 
	 * @return string 
	 * @static 
	 */
	 public static function yieldContent($section){
		return static::$root->yieldContent($section);
	 }

	/**
	 * Flush all of the section contents.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function flushSections(){
		 static::$root->flushSections();
	 }

	/**
	 * Increment the rendering counter.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function incrementRender(){
		 static::$root->incrementRender();
	 }

	/**
	 * Decrement the rendering counter.
	 *
	 * @return void 
	 * @static 
	 */
	 public static function decrementRender(){
		 static::$root->decrementRender();
	 }

	/**
	 * Check if there are no active render operations.
	 *
	 * @return bool 
	 * @static 
	 */
	 public static function doneRendering(){
		return static::$root->doneRendering();
	 }

	/**
	 * Add a location to the array of view locations.
	 *
	 * @param string $location 
	 * @return void 
	 * @static 
	 */
	 public static function addLocation($location){
		 static::$root->addLocation($location);
	 }

	/**
	 * Add a new namespace to the loader.
	 *
	 * @param string $namespace 
	 * @param string|array $hints 
	 * @return void 
	 * @static 
	 */
	 public static function addNamespace($namespace, $hints){
		 static::$root->addNamespace($namespace, $hints);
	 }

	/**
	 * Register a valid view extension and its engine.
	 *
	 * @param string $extension 
	 * @param string $engine 
	 * @param \Closure $resolver 
	 * @return void 
	 * @static 
	 */
	 public static function addExtension($extension, $engine, $resolver = null){
		 static::$root->addExtension($extension, $engine, $resolver);
	 }

	/**
	 * Get the extension to engine bindings.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getExtensions(){
		return static::$root->getExtensions();
	 }

	/**
	 * Get the engine resolver instance.
	 *
	 * @return \Illuminate\View\Engines\EngineResolver 
	 * @static 
	 */
	 public static function getEngineResolver(){
		return static::$root->getEngineResolver();
	 }

	/**
	 * Get the view finder instance.
	 *
	 * @return \Illuminate\View\ViewFinderInterface 
	 * @static 
	 */
	 public static function getFinder(){
		return static::$root->getFinder();
	 }

	/**
	 * Get the event dispatcher instance.
	 *
	 * @return \Illuminate\Events\Dispatcher 
	 * @static 
	 */
	 public static function getDispatcher(){
		return static::$root->getDispatcher();
	 }

	/**
	 * Get the IoC container instance.
	 *
	 * @return \Illuminate\Container\Container 
	 * @static 
	 */
	 public static function getContainer(){
		return static::$root->getContainer();
	 }

	/**
	 * Set the IoC container instance.
	 *
	 * @param \Illuminate\Container\Container $container 
	 * @return void 
	 * @static 
	 */
	 public static function setContainer($container){
		 static::$root->setContainer($container);
	 }

	/**
	 * Get all of the shared data for the environment.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getShared(){
		return static::$root->getShared();
	 }

	/**
	 * Get the entire array of sections.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getSections(){
		return static::$root->getSections();
	 }

	/**
	 * Get all of the registered named views in environment.
	 *
	 * @return array 
	 * @static 
	 */
	 public static function getNames(){
		return static::$root->getNames();
	 }

 }
}

