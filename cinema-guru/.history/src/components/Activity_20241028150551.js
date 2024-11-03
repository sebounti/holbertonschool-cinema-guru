import React from 'react';
import './components.css'; // Importer le fichier CSS pour styliser le composant

export default function Activity({ activity }) {
  // Assurez-vous que `activity` contient les informations nécessaires pour formater la phrase
  const formattedActivity = `User ${activity.username} performed ${activity.action} on ${activity.date}`;

  return (
    <li className="activity-item">
      <p>{formattedActivity}</p>
    </li>
  );
}
