interface Theme {
  colors: {
    [key: string]: string;
  };
}

const theme: Theme = {
  colors: {
    primary: '#D69807',
    red: '#A7383E',
    green: '#315B14',
    light: '#ffffff',
    dark: '#000000'
  }
};

export default theme;
