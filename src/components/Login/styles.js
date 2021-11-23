const styles = () => ({
  container: {
    height: '100vh',
    background: 'rgb(10, 25, 41)',
  },
  content: {
    padding: 20,
    height: '100%',
  },
  field: {
    color: '#ffffff',
    border: '1px solid #3f51b5c7',
    width: 300,
    height: 55,
    backgroundColor: '#3f51b561',
    borderRadius: 25,
    paddingLeft: 20,
  },
  fieldItem: {
    paddingBottom: 12,
  },
  loginFormContainer: {
    height: '100%',
  },
  appName: {
    color: '#7d85af',
    fontSize: 20,
    textAlign: 'center',
    paddingBottom: 30,
  },
  submitButton: {
    width: 300,
    marginTop: 20,

    '&:disabled': {
      color: '#7d85af',
      backgroundColor: 'rgb(39 32 32)',
    },
  },
});

export default styles;
