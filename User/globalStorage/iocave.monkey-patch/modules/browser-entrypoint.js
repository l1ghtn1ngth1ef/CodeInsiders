'use strict';

function _monkeyPatch(bootstrapWindow) {

	const _prev = bootstrapWindow.load;

	bootstrapWindow.load = function(modulePaths, resultCallback, options) {

		let prevBeforeLoaderConfig = options.beforeLoaderConfig;
		options.beforeLoaderConfig = function(configuration, loaderConfig) {
			if (loaderConfig === undefined) {
				loaderConfig = configuration;
			}
			if (prevBeforeLoaderConfig && typeof prevBeforeLoaderConfig === 'function')
				prevBeforeLoaderConfig(configuration, loaderConfig);
			if (loaderConfig.amdModulesPattern !== undefined) {
				let prevPattern = loaderConfig.amdModulesPattern;
				let additionalPattern = /^monkey-generated\/|^customize-ui\//;
				let joined = prevPattern.toString().slice(1, -1) + additionalPattern.toString().slice(1, -1);
				loaderConfig.amdModulesPattern = new RegExp(joined);
			}
			Object.assign(loaderConfig.paths, {
				"customize-ui" : "../../../../../home/god/.config/Code - Insiders/User/globalStorage/iocave.customize-ui/modules",
			"monkey-generated" : "../../../../../home/god/.config/Code - Insiders/User/globalStorage/iocave.monkey-patch/modules"
			});
			require.define("monkey-patch", {
				load: function (name, req, onload, config) {
					req([name], function (value) {
						req(["customize-ui/customize-ui"], function() {
							onload(value);
						}, function(error) {
							console.error(error);
							onload(value);
						});
					});
				}
			});
		}
		if (modulePaths[0] == 'vs/workbench/workbench.main' ||
			modulePaths[0] == 'vs/workbench/workbench.desktop.main') {
			modulePaths[0] = 'monkey-patch!' + modulePaths[0];
		}
		return _prev(modulePaths, resultCallback, options);
	};
}

if (window.MonacoBootstrapWindow !== undefined) {
	_monkeyPatch(window.MonacoBootstrapWindow);
} else {
	Object.defineProperty(
		window,
		"MonacoBootstrapWindow", {
			set: function(value) { _monkeyPatch(value); window._monkeyPatchMonacoBootstrapWindow = value; },
			get: function() { return window._monkeyPatchMonacoBootstrapWindow;}
		}
	);
}

