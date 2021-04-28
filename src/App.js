import React from 'react';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        tries: 0,
        bCalls: 0,
        term: 0,
        found: '',
        data: [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 
          48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 
          73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 
          81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 
          69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 
          46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5]
    }
  }

  linearSearch(e) {
    e.preventDefault();
    let term = parseInt(this.state.term);
    let arr = this.state.data;
    let count = 0;
    let flag = false;

    for (let i = 0; i < arr.length; i++) {
      count++
      if (arr[i] === term) {
        this.setState({tries: count});
        this.setState({found:'was found via linear search'});
        flag = true;
        return;
      }
    }

    if (flag == false) {
      this.setState({tries: count});
      this.setState({found:'not found via linear search'});
    }

  }

  sort(e) {
    e.preventDefault();
    this.setState({data: this.state.data.sort()});
  }

  helper(e) {
    e.preventDefault();
    this.binarySearch()
  }

  binarySearch(start, end) {
    let term = parseInt(this.state.term);
    let arr = this.state.data;
    let out = 0;

    this.setState({bCalls: this.state.bCalls++})

    var start = start === undefined ? 0 : start;
    var end = end === undefined ? arr.length - 1 : end;

    if (start > end) {
        console.log('not found')
        this.setState({tries: this.state.bCalls})
        this.setState({found:'not found via binary search'});
        return;
    }

    const index = Math.floor((start + end) / 2);
    const item = arr[index];

    console.log(start, end);

    if (item == term) {
        out = index;
        this.setState({tries: out})
        this.setState({found:'was found via binary search'});
        return;
    }
    
    else if (item < term) {
        this.binarySearch(index + 1, end);
    }
    else if (item > term) {
        this.binarySearch(start, index - 1);
    }


  }

  updateSearch(term) {
    this.setState({term: term});
  }

    
  render() {
    let dataDisp = this.state.data.join(',')
    return (
      <main className='App'>
        <form className="edit" onSubmit={(e) => this.editReviewHideInput(e)}>
          <section>
              <h2>Search this array:</h2>
              <p>{dataDisp}</p>
              <label htmlFor="title">Search term:</label>
              <input className="edit" onChange={e => this.updateSearch(e.target.value)} name="title" type="text" id="title" required />

              <div>
                  <button  className="edit" type="submit" onClick={(e) => this.linearSearch(e)}>Linear Search</button>
                  <button  className="edit" type="button" onClick={(e) => this.sort(e)}>Sort</button>
                  <button  className="edit" type="button" onClick={(e) => this.helper(e)}>Binary Search</button>
              </div>
          </section>
        </form>
        <p className="results">{this.state.tries} tries {this.state.found}</p>

      </main>
    );
  }
}

export default App;