function Colors(props) {
  
  let colorSet = [
          {color: '#F0F8FF'},                              
          {color: '#FAEBD7'},
          {color: '#000000'},
		    	{color: '#00FFFF'},                              
          {color: '#7FFFD4'},
			    {color: '#F0FFFF'},                              
          {color: '#F5F5DC'},
			    {color: '#FFE4C4'},                              
			    {color: '#FFEBCD'},                              
          {color: '#0000FF'},
			    {color: '#8A2BE2'},                              
          {color: '#A52A2A'},
			    {color: '#DEB887'},                              
          {color: '#5F9EA0'},
			    {color: '#7FFF00'},                              
          {color: '#D2691E'},
			    {color: '#FF7F50'},                              
          {color: '#6495ED'},
		    	{color: '#FFF8DC'},                              
          {color: '#DC143C'},                              
          {color: '#00008B'},
		    	{color: '#008B8B'},                              
          {color: '#B8860B'},
			    {color: '#A9A9A9'},                              
          {color: '#006400'},                              
          {color: '#BDB76B'},
			    {color: '#8B008B'},                              
          {color: '#556B2F'},
			    {color: '#FF8C00'},                              
          {color: '#9932CC'},
			    {color: '#8B0000'},                              
          {color: '#E9967A'},
		    	{color: '#8FBC8F'},                              
          {color: '#483D8B'},                              
          {color: '#2F4F4F'},
		    	{color: '#00CED1'},                              
          {color: '#9400D3'},
		    	{color: '#FF1493'},                              
          {color: '#00BFFF'},
		    	{color: '#696969'},                              
			    {color: '#1E90FF'},                              
          {color: '#B22222'},
			    {color: '#FFFAF0'},                              
          {color: '#228B22'},
			    {color: '#FF00FF'},                              
          {color: '#DCDCDC'},
			    {color: '#F8F8FF'},                              
          {color: '#FFD700'},
			    {color: '#DAA520'},                              
          {color: '#808080'},
		    	{color: '#008000'},                              
          {color: '#ADFF2F'},                              
          {color: '#F0FFF0'},
			    {color: '#FF69B4'},                              
          {color: '#CD5C5C'},
			    {color: '#4B0082'},                              
          {color: '#FFFFF0'},
			    {color: '#F0E68C'},                              
          {color: '#E6E6FA'},
			    {color: '#FFF0F5'},                              
          {color: '#7CFC00'},
			    {color: '#FFFACD'},                              
          {color: '#ADD8E6'},
		    	{color: '#F08080'},                              
          {color: '#E0FFFF'},
		    	{color: '#FAFAD2'},                              
          {color: '#D3D3D3'}
  ]
  return (
    <Page>
    
     
      <Toggle
          settingsKey="toggle"
          label="12h"
        />    
        <Toggle
          settingsKey="white"
          label="White icons"
        /> 
         <Toggle
          settingsKey="distanceUnit"
          label="Distance mi"
        /> 
       <Toggle
          settingsKey="temperatureUnit"
          label="Temperature °F"
        /> 
    
 
    
      <Section
        title={<Text bold align="center">Left Background Color</Text>}>
  
        <ColorSelect
          settingsKey="leftBackgroundColor"
          colors={colorSet}
        />
    </Section>
    
  
    
    
    
          <Section
        title={<Text bold align="center">Right Background Color</Text>}>
        <ColorSelect
          settingsKey="rightBackgroundColor"
          colors={colorSet}
        />
    </Section>
    
    
              <Section
        title={<Text bold align="center">Hour Color</Text>}>
        <ColorSelect
          settingsKey="hourColor"
          colors={colorSet}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Minute Color</Text>}>
        <ColorSelect
          settingsKey="minuteColor"
          colors={colorSet}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">HR Color</Text>}>
        <ColorSelect
          settingsKey="hrColor"
          colors={colorSet}
        />
    </Section>
    
                  <Section
        title={<Text bold align="center">Steps Color</Text>}>
        <ColorSelect
          settingsKey="stepsColor"
          colors={colorSet}
        />
    </Section>
    
                      <Section
        title={<Text bold align="center">Distance Color</Text>}>
        <ColorSelect
          settingsKey="distanceColor"
          colors={colorSet}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Date Color</Text>}>
        <ColorSelect
          settingsKey="dateColor"
          colors={colorSet}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Day Color</Text>}>
        <ColorSelect
          settingsKey="dayColor"
          colors={colorSet}
        />
    </Section>
    
                          <Section
        title={<Text bold align="center">Battery Color</Text>}>
        <ColorSelect
          settingsKey="batteryColor"
          colors={colorSet}
        />
    </Section>
    
    <Section
        title={<Text bold align="center">Weather Color</Text>}>
        <ColorSelect
          settingsKey="weatherColor"
          colors={colorSet}
        />
    </Section>
    
    
        <Section
        title={<Text bold align="center">Activity Minutes Color</Text>}>
        <ColorSelect
          settingsKey="activeColor"
          colors={colorSet}
        />
    </Section>
    

    </Page>
  );
}

registerSettingsPage(Colors);