export const RecoveryOrchestrator = {
  recover: (state, registry) => {
    const plan = registry.recoveryPlan[state.phase];
    if (!plan) return { recovered: false, reason: "no-plan" };

    const steps = [];
    for (const step of plan.steps) {
      const ok = step.execute(state);
      steps.push({ id: step.id, ok });
    }

    return { recovered: true, steps };
  }
};
