import Graph, {Attributes} from 'graphology-types';
import {ForceAtlas2LayoutParameters} from './index';

export default class FA2LayoutSupervisor<
  NodeAttributes extends Attributes = Attributes,
  EdgeAttributes extends Attributes = Attributes
> {
  constructor(
    graph: Graph,
    params?: ForceAtlas2LayoutParameters<NodeAttributes, EdgeAttributes> & {
      backgroundIterations: number;
    }
  );

  isRunning(): boolean;
  updateSettings(settings: Partial<ForceAtlas2LayoutParameters<NodeAttributes, EdgeAttributes>>): void;
  start(): void;
  stop(): void;
  kill(): void;
}
