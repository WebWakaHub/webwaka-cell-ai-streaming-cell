/**
 * AiStreamingCell — Cell Layer
 * Composes organelles per BIOLOGICAL_GOVERNANCE_CONSTITUTION §4.1
 * Layer: cell → depends on → organelle
 */

import { CognitivePortOrchestrator } from "@webwaka/organelle-cognitive-port";
import { MessageGatewayOrchestrator } from "@webwaka/organelle-message-gateway";

export { CognitivePortOrchestrator } from '@webwaka/organelle-cognitive-port';
export { MessageGatewayOrchestrator } from '@webwaka/organelle-message-gateway';

/**
 * AiStreamingCell Composition
 * Assembles organelle-layer components into a cohesive cell-layer capability.
 */
export class AiStreamingCellComposition {
  private cognitivePortOrchestrator: CognitivePortOrchestrator;
  private messageGatewayOrchestrator: MessageGatewayOrchestrator;

  constructor() {
    this.cognitivePortOrchestrator = new CognitivePortOrchestrator();
    this.messageGatewayOrchestrator = new MessageGatewayOrchestrator();
  }
}

export * from "./types";
