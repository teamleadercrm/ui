import React, { useState } from 'react';
import { addStoryInGroup, PLAYGROUND } from '../../utils';
import { Box, Button, DataGrid, Dialog, Input, TextBody } from '../../../src';
import { rows3 } from '../../../src/static/data/datagrid';

export default {
  title: addStoryInGroup(PLAYGROUND, 'Dialog'),

  parameters: {
    info: {
      source: false,
      propTables: false,
    },
  },
};

export const datagridInDialog = () => {
  const [dialogActive, setDialogActive] = useState(false);

  const showHideDialog = () => {
    setDialogActive(!dialogActive);
  };

  return (
    <Box>
      <Button label="Open Dialog" onClick={showHideDialog} />
      <Dialog
        title="Set unit costs"
        onCloseClick={showHideDialog}
        onEscKeyDown={showHideDialog}
        onOverlayClick={showHideDialog}
        primaryAction={{ label: 'Confirm', onClick: showHideDialog }}
        scrollable={false}
        secondaryAction={{ label: 'Cancel', onClick: showHideDialog }}
        size="large"
        active={dialogActive}
      >
        <Box padding={0} style={{ borderBottom: '1px solid', borderColor: '#f7f7fa' }}>
          <DataGrid selectable={false} comparableId={1}>
            <DataGrid.HeaderRow>
              <DataGrid.HeaderCell style={{ paddingLeft: '18px' }}>PRODUCT</DataGrid.HeaderCell>
              <DataGrid.HeaderCell>ID</DataGrid.HeaderCell>
              <DataGrid.HeaderCell>UNIT PRICE</DataGrid.HeaderCell>
              <DataGrid.HeaderCell align="right" style={{ paddingRight: '20px' }}>
                UNIT COST
              </DataGrid.HeaderCell>
            </DataGrid.HeaderRow>
          </DataGrid>
        </Box>
        <Box
          padding={0}
          overflowY="auto"
          style={{ borderBottom: '1px solid', borderTop: '1px solid', borderColor: '#e4e4e6' }}
        >
          <DataGrid selectable={false} comparableId={1}>
            {rows3.map((row, index) => {
              return (
                <DataGrid.BodyRow key={index}>
                  <DataGrid.Cell style={{ paddingLeft: '18px' }}>
                    <TextBody>{row.column1}</TextBody>
                  </DataGrid.Cell>
                  <DataGrid.Cell>{row.column2}</DataGrid.Cell>
                  <DataGrid.Cell>{row.column3}</DataGrid.Cell>
                  <DataGrid.Cell align="right" style={{ paddingRight: '20px' }}>
                    <Box display="flex" alignItems="center" justifyContent="space-between" style={{ width: '100px' }}>
                      <TextBody marginRight={2}>€</TextBody>
                      <Input placeholder={row.column4} />
                    </Box>
                  </DataGrid.Cell>
                </DataGrid.BodyRow>
              );
            })}
          </DataGrid>
        </Box>
      </Dialog>
    </Box>
  );
};
