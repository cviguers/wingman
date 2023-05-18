const User = require('../../../../server/models/User');
 function MigrationPatternSelect() {
  const migrationPatternOptions = [
    '',
    'New Zealand to Alaska',
    'Arctic to Antarctic and Back',
    'Eastern United States to Central America',
    'Northern Europe to the Mediterranean',
    'North America to South America',
    'North and South America to the Caribbean',
    'Europe to Africa',
    'Southern South America to the Arctic',
    'New Zealand to Alaska and Siberia',
    'North America to Central America'
  ];
   const handleSelectChange = async (event) => {
    const migrationPattern = event.target.value;
    const users = await getFilteredUsers(migrationPattern);
    // display the filtered users
  };
   return (
    <div>
      <select id="migration-pattern-select" onChange={handleSelectChange}>
        {migrationPatternOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
 async function getFilteredUsers(migrationPattern) {
  const query = migrationPattern ? { Migration: migrationPattern } : {};
  const users = await User.find(query);
  return users;
}