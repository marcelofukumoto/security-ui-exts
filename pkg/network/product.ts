import { IPlugin } from '@shell/core/types';

export function init($plugin: IPlugin, store: any) {
  const productName = 'network';

  // Used by the product registration below once it is enabled
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const {
    product,
    virtualType,
    basicType
  } = $plugin.DSL(store, productName);
  /* eslint-enable @typescript-eslint/no-unused-vars */

  // registering a top-level product
  // product({
  //     icon: 'pod_security',
  //     inStore: 'cluster',
  // });

  // // => => => creating a custom page
  // virtualType({
  //     label: 'Overview',
  //     name:   'overview',
  //     namespaced: false,
  //     route:    {
  //         name:   `c-cluster-${productName}-overview`,
  //         params: {
  //             product: productName
  //         },
  //         meta: { pkg: "network", product: productName }
  //     }
  // });

  // basicType([
  //     "overview"
  // ]);
}