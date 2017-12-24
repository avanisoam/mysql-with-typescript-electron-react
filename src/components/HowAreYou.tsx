import * as React from 'react';

export enum Mood {
  Happy,
  Alright,
  Meh
}

export interface ComponentProperties {
  mood: Mood;
}

function HowAreYou({ mood }: ComponentProperties) {
  return (
      <div className="mood">Oh {getMoodMessage(mood)}</div>
  );
}

export default HowAreYou;

// helpers

function getMoodMessage(mood: Mood) {
  switch (mood) {
    case Mood.Happy:
      return 'HELL YAH!';
    case Mood.Alright:
      return 'Alrighythen!';
    case Mood.Meh:
      return 'Why meh man?';
    default:
      return 'dunno wtf?';
  }
}
