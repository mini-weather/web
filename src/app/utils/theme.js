import { createMuiTheme } from '@material-ui/core/styles'


const englishTheme = createMuiTheme({
  palette: {
    primary: { main: '#58c47f' },
    secondary: { main: '#4fabee' },
    accent: { main: '#58c47f' }
  },
  typography: {
    useNextVariants: true,
    color: '#2c2c2c',
    fontFamily: 'Kumbh Sans'
  },
  overrides: {
    MuiPrivateTabIndicator: {
      root: {
        backgroundColor: '#58c47f'
      }
    },
    MuiPickerDTTabs: {
      tabs: {
        flexContainer: {
          alignItems: 'center',
          justifyContent: 'center'
        },
        color: '#FFFFFF !important',
        MuiTabs: {
          MuiTab: {
            'root': {
              color: '#FFFFFF'
            }
          }
        }
      }
    },
    MuiPickersModal: {
      direction: 'ltr !important',
      color: '#FFFFFF !important',
      dialog: {
        'direction': 'ltr'
      }
    },
    MuiChip: {
      root: {
        borderRadius: '5px',
        direction: 'rtl !important'
      },
      deleteIcon: {
        color: 'rgba(255, 255, 255, 0.65)',
        width: '1.1rem',
        height: '1.1rem',
        margin: '0 -8px 0 4px'
      },
      label: {
        fontSize: '0.8rem',
        color: '#FFFFFF'
      }
    },
    MuiTab: {
      root: {
        fontWeight: '400',
        fontSize: '15px',
        color: 'rgba(0, 0, 0, 0.8) !important',
        '&$selected': {
          fontWeight: '500'
        }
      }
    },
    MuiStepper: {
      root: {
        justifyContent: 'center'
      }
    },
    MuiStepConnector: {
      root: {
        display: 'none'
      },
      line: {
        borderColor: '#FFFFFF'
      }
    },
    MuiStepLabel: {
      root: {
        marginLeft: '1rem',
        marginRight: '1rem'
      },
      label: {
        color: '#444444 !important',
        fontWeight: '500'
      },
      active: {
        color: '#58c47f !important',
        fontWeight: '500'
      }
    },
    MuiAppBar: {
      root: {
        boxShadow: 'none'
      }
    },
    MuiButton: {
      contained: {
        boxShadow: 'none'
      },
      extendedFab: {
        boxShadow: 'none'
      },
      fab: {
        boxShadow: 'none'
      }
    },
    MuiFab: {
      extended: {
        boxShadow: 'none'
      }
    },
    MuiTooltip: {
      'tooltip': {
        fontSize: '0.7rem',
        lineHeight: '1.4rem'
      }
    }
  }
})

export {
  englishTheme
}
