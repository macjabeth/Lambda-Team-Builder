import React, { useState } from 'react';

import MemberForm from './components/MemberForm';
import TeamList from './components/TeamList';

function App() {
  const [team, setTeam] = useState([]);
  const [memberToEdit, setMemberToEdit] = useState(false);

  const addToTeam = member => {
    setTeam([...team, member]);
  };

  const editMember = changes => {
    setTeam(team.map(member => (member.id === changes.id ? changes : member)));
    setMemberToEdit(false);
  };

  const deleteMember = id => {
    setTeam(team.filter(member => member.id !== id));
  }

  return (
    <div className="App">
      <MemberForm
        addToTeam={addToTeam}
        memberToEdit={memberToEdit}
        editMember={editMember}
      />
      <TeamList team={team} setMemberToEdit={setMemberToEdit} deleteMember={deleteMember} />
    </div>
  );
}

export default App;
